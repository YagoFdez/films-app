'use client';

import { useEffect } from 'react';
import { useFilmStore } from '@/app/store/movieStore';
import Image from 'next/image';

export default function MyListPage() {
  const { ratedMovies, getRatedMovies } = useFilmStore();

  useEffect(() => {
    getRatedMovies();
  }, [getRatedMovies]);

  if (ratedMovies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Rated Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ratedMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
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
              <p className="text-gray-600 text-sm mb-2">
                Rating: {movie.rating}/10
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
