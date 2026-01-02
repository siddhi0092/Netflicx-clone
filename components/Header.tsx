'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Search, Bell, User } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showBackground, setShowBackground] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-500 ${
        showBackground ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-red-600 text-2xl font-bold">
            NETFLIX
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/tv-shows" className="text-white hover:text-gray-300">
              TV Shows
            </Link>
            <Link href="/movies" className="text-white hover:text-gray-300">
              Movies
            </Link>
            <Link href="/my-list" className="text-white hover:text-gray-300">
              My List
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {showSearch ? (
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-black/70 text-white px-3 py-1 rounded border border-gray-600 focus:outline-none focus:border-white"
                autoFocus
              />
              <button type="button" onClick={() => setShowSearch(false)} className="text-white ml-2">
                ✕
              </button>
            </form>
          ) : (
            <Search className="text-white w-6 h-6 cursor-pointer" onClick={() => setShowSearch(true)} />
          )}
          <Bell className="text-white w-6 h-6 cursor-pointer" />
          {session ? (
            <div className="relative group">
              <User className="text-white w-6 h-6 cursor-pointer" />
              <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="py-1">
                  <Link href="/account" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    Account
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => router.push('/login')}
              className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;