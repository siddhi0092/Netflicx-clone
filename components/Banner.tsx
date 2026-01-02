'use client';

import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '@/lib/movies';

interface BannerProps {
  movie: Movie;
}

const Banner = ({ movie }: BannerProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className="relative h-[56.25vw] max-h-[800px]">
      <div className="absolute inset-0">
        <img
          src={movie?.backdrop_path}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {movie?.title}
        </h1>
        <p className="text-lg text-white mb-6 max-w-md">
          {truncate(movie?.overview, 150)}
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
            <Play className="w-5 h-5 mr-2" />
            Play
          </button>
          <button className="flex items-center bg-gray-500/70 text-white px-6 py-2 rounded hover:bg-gray-500 transition">
            <Info className="w-5 h-5 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;