import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import AddToListButton from '@/components/AddToListButton';
import { getMovieById } from '@/lib/movies';

interface MoviePageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = getMovieById(parseInt(id));

  if (!movie) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-16">
        <div className="relative h-[56.25vw] max-h-[800px]">
          {movie.trailer ? (
            <iframe
              src={`https://www.youtube.com/embed/${movie.trailer.split('v=')[1]}`}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          ) : (
            <img
              src={movie.backdrop_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="px-4 md:px-8 py-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {movie.title}
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            {movie.overview}
          </p>
          <div className="flex items-center space-x-4 text-white mb-6">
            <span>Release Date: {movie.release_date}</span>
            <span>Rating: {movie.vote_average}/10</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200">
              Play
            </button>
            <AddToListButton movieId={movie.id} />
          </div>
        </div>
      </div>
    </div>
  );
}