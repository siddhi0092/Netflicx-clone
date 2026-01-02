'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Play, Plus, Check } from 'lucide-react';
import { Movie } from '@/lib/movies';

interface ThumbnailProps {
  movie: Movie;
}

const Thumbnail = ({ movie }: ThumbnailProps) => {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    // Check if movie is in user's list
    const checkWatchlist = async () => {
      try {
        const res = await fetch('/api/watchlist');
        if (res.ok) {
          const data = await res.json();
          setIsInList(data.watchlist.includes(movie.id));
        }
      } catch (error) {
        console.error('Error checking watchlist:', error);
      }
    };
    checkWatchlist();
  }, [movie.id]);

  const toggleWatchlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch('/api/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId: movie.id }),
      });
      if (res.ok) {
        const data = await res.json();
        setIsInList(data.added);
      }
    } catch (error) {
      console.error('Error updating watchlist:', error);
    }
  };

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <Image
        src={movie.poster_path}
        alt={movie.title}
        fill
        className="rounded-sm object-cover md:rounded"
      />

      {showDetails && (
        <div className="absolute inset-0 bg-black/80 rounded-sm md:rounded p-2">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-white text-sm font-semibold truncate">
                {movie.title}
              </h3>
              <p className="text-gray-300 text-xs mt-1 line-clamp-3">
                {movie.overview}
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex space-x-2">
                <Play className="w-6 h-6 text-white bg-white/20 rounded-full p-1" />
                <button
                  onClick={toggleWatchlist}
                  className="w-6 h-6 text-white bg-white/20 rounded-full p-1 hover:bg-white/30"
                >
                  {isInList ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;