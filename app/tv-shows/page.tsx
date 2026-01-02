import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Header from '@/components/Header';
import Row from '@/components/Row';
import { movies, getRandomMovies } from '@/lib/movies';

export default async function TVShows() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const trendingNow = getRandomMovies(10);
  const topRated = getRandomMovies(10);
  const actionMovies = movies.filter(m => m.genre_ids.includes(28));
  const comedyMovies = movies.filter(m => m.genre_ids.includes(35));
  const horrorMovies = movies.filter(m => m.genre_ids.includes(27));
  const romanceMovies = movies.filter(m => m.genre_ids.includes(10749));
  const documentaries = movies.filter(m => m.genre_ids.includes(99));

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 pt-20">
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
    </div>
  );
}