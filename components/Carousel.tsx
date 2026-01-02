'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Movie } from '@/lib/movies';
import Banner from './Banner';

interface CarouselProps {
  movies: Movie[];
}

const Carousel = ({ movies }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-gray-500'}`}></div>
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {movies.slice(0, 5).map((movie) => (
          <Banner key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;