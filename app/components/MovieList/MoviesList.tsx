import { Movie, MovieResponse} from '@/app/types';
import Image from 'next/image';
import { getPopularFilms, searchMovies } from '@/app/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useFilmStore } from '@/app/store/movieStore';
import { useState } from 'react';


export const MoviesList = () => {
  const { searchQuery, setSelectedMovie } = useFilmStore();
  const [page, setPage] = useState(1);

  const { data: moviesData, isLoading, error } = useQuery<MovieResponse, Error>({
    queryKey: ['movies', searchQuery, page],
    queryFn: () => searchQuery ? searchMovies(searchQuery, page) : getPopularFilms(page),
  });

  if (isLoading) return <div className="text-center py-8 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">An error occurred: {error.message}</div>;

  const handlePageChange = (newPage: number) => setPage(newPage);

  return (
    <div className="container mx-auto px-4 py-8">
      {moviesData?.results && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {moviesData.results.map((movie: Movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative aspect-w-2 aspect-h-3">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  layout="fill"
                  objectFit="cover"
                  alt={`Poster of ${movie.title}`}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-1">{movie.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{movie.release_date}</p>
                <p className="text-gray-700 text-sm line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {moviesData?.total_pages && moviesData.total_pages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Before
          </button>
          <span className="text-gray-700 font-medium">
            Page {page} of {moviesData.total_pages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === moviesData.total_pages}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};