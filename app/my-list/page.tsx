import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Header from '@/components/Header';
import Row from '@/components/Row';
import { getMovieById, Movie } from '@/lib/movies';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

async function getWatchlistMovies(watchlist: number[]): Promise<Movie[]> {
  return watchlist.map(id => getMovieById(id)).filter((movie): movie is Movie => movie !== undefined);
}

export default async function MyList() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  await dbConnect();
  const user = await User.findOne({ email: session.user?.email });

  const watchlistMovies = user ? await getWatchlistMovies(user.watchlist) : [];

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 pt-20">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold">My List</h1>
        </div>
        {watchlistMovies.length > 0 ? (
          <Row title="Your Watchlist" movies={watchlistMovies} />
        ) : (
          <div className="text-white text-center py-20">
            <p className="text-xl mb-4">Your list is empty</p>
            <p className="text-gray-400">Add movies to your list to watch them later</p>
          </div>
        )}
      </main>
    </div>
  );
}