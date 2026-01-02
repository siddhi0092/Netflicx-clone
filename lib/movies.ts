export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  trailer?: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Great Adventure",
    overview: "An epic journey through unknown lands filled with mystery and excitement.",
    poster_path: "https://picsum.photos/300/450?random=1",
    backdrop_path: "https://picsum.photos/1280/720?random=1",
    release_date: "2023-05-15",
    vote_average: 8.5,
    genre_ids: [28, 12],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Mystery Island",
    overview: "A group of friends discover a mysterious island with ancient secrets.",
    poster_path: "https://picsum.photos/300/450?random=2",
    backdrop_path: "https://picsum.photos/1280/720?random=2",
    release_date: "2023-07-22",
    vote_average: 7.8,
    genre_ids: [9648, 53],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Comedy Central",
    overview: "Hilarious adventures of a group of misfit comedians.",
    poster_path: "https://picsum.photos/300/450?random=3",
    backdrop_path: "https://picsum.photos/1280/720?random=3",
    release_date: "2023-09-10",
    vote_average: 8.2,
    genre_ids: [35],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Sci-Fi Odyssey",
    overview: "A futuristic tale of space exploration and alien encounters.",
    poster_path: "https://picsum.photos/300/450?random=4",
    backdrop_path: "https://picsum.photos/1280/720?random=4",
    release_date: "2023-11-05",
    vote_average: 9.0,
    genre_ids: [878, 12],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Horror Nights",
    overview: "A chilling story of supernatural events in a haunted house.",
    poster_path: "https://picsum.photos/300/450?random=5",
    backdrop_path: "https://picsum.photos/1280/720?random=5",
    release_date: "2023-10-31",
    vote_average: 7.5,
    genre_ids: [27],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Romance in Paris",
    overview: "A beautiful love story set in the romantic city of Paris.",
    poster_path: "https://picsum.photos/300/450?random=6",
    backdrop_path: "https://picsum.photos/1280/720?random=6",
    release_date: "2023-12-14",
    vote_average: 8.8,
    genre_ids: [10749, 18],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Action Heroes",
    overview: "High-octane action with heroes fighting against evil forces.",
    poster_path: "https://picsum.photos/300/450?random=7",
    backdrop_path: "https://picsum.photos/1280/720?random=7",
    release_date: "2024-01-20",
    vote_average: 8.3,
    genre_ids: [28, 53],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Documentary Wonders",
    overview: "Exploring the wonders of nature and human achievements.",
    poster_path: "https://picsum.photos/300/450?random=8",
    backdrop_path: "https://picsum.photos/1280/720?random=8",
    release_date: "2024-02-10",
    vote_average: 7.9,
    genre_ids: [99],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 9,
    title: "Fantasy Realm",
    overview: "A magical journey into a fantasy world of dragons and wizards.",
    poster_path: "https://picsum.photos/300/450?random=9",
    backdrop_path: "https://picsum.photos/1280/720?random=9",
    release_date: "2024-03-05",
    vote_average: 8.7,
    genre_ids: [14, 12],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 10,
    title: "Thriller Suspense",
    overview: "A gripping thriller with twists and turns at every corner.",
    poster_path: "https://picsum.photos/300/450?random=10",
    backdrop_path: "https://picsum.photos/1280/720?random=10",
    release_date: "2024-04-15",
    vote_average: 8.1,
    genre_ids: [53, 80],
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

export const getRandomMovies = (count: number) => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getMovieById = (id: number) => {
  return movies.find(movie => movie.id === id);
};