'use client'

import { Movie } from "@/app/types"
import Image from "next/image";
import { getPopularFilms, searchMovies } from "@/app/lib/api"
import { useQuery } from '@tanstack/react-query'
import { useFilmStore } from "@/app/store/movieStore"

export const MoviesList = () => {
  const { searchQuery, setSelectedMovie, setMovies } = useFilmStore();

  const { data: movies, isLoading, error } = useQuery<Movie[], Error>({
    queryKey: ['movies', searchQuery],
    queryFn: () => searchQuery ? searchMovies(searchQuery) : getPopularFilms(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="w-full mx-auto">
      {movies && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <div key={movie.id} onClick={() => setSelectedMovie(movie)} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="relative h-64">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  layout="fill"
                  objectFit="cover"
                  alt={`Poster of ${movie.title}`}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{movie.release_date}</p>
                <p className="text-gray-800 text-sm line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};