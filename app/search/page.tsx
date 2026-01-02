import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Header from '@/components/Header';
import Row from '@/components/Row';
import { movies } from '@/lib/movies';

interface SearchPageProps {
  searchParams: { q?: string };
}

export default async function Search({ searchParams }: SearchPageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const query = searchParams.q || '';
  const searchResults = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.overview.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 pt-20">
        <section className="md:space-y-24">
          {query ? (
            <Row title={`Search results for "${query}"`} movies={searchResults} />
          ) : (
            <div className="text-white text-center py-20">
              <h1 className="text-4xl font-bold mb-4">Search for movies</h1>
              <p className="text-xl">Use the search bar above to find your favorite movies</p>
            </div>
          )}
          {query && searchResults.length === 0 && (
            <div className="text-white text-center py-20">
              <h1 className="text-4xl font-bold mb-4">No results found</h1>
              <p className="text-xl">Try searching for something else</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}