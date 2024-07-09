'use client';

import { MoviesList } from './components/MovieList/MoviesList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MovieDetail } from './components/MovieDetails/MovieDetails';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useFilmStore } from './store/movieStore';
import { useInitGuestSession } from './hooks/useInitGuestSession';
import { NavBar } from './components/NavBar/NavBar';

export default function Home() {
  useInitGuestSession();
  const queryClient = new QueryClient();
  const { selectedMovie, setSelectedMovie } = useFilmStore();
  
  return (
    <QueryClientProvider client={queryClient}>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Films</h1>
            <SearchBar />
          </header>
          <MoviesList />
          {selectedMovie && (
            <MovieDetail
              movieInfo={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          )}
    </QueryClientProvider>
  );
}
