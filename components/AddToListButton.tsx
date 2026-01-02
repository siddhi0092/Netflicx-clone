'use client';

import { useState, useEffect } from 'react';

interface AddToListButtonProps {
  movieId: number;
}

export default function AddToListButton({ movieId }: AddToListButtonProps) {
  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    const checkWatchlist = async () => {
      try {
        const res = await fetch('/api/watchlist');
        if (res.ok) {
          const data = await res.json();
          setIsInList(data.watchlist.includes(movieId));
        }
      } catch (error) {
        console.error('Error checking watchlist:', error);
      }
    };
    checkWatchlist();
  }, [movieId]);

  const toggleWatchlist = async () => {
    try {
      const res = await fetch('/api/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId }),
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
    <button
      onClick={toggleWatchlist}
      className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-400"
    >
      {isInList ? '✓ In My List' : '+ My List'}
    </button>
  );
}