'use client'

import { MoviesList } from "./components/MovieList/MoviesList";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { MovieDetail } from "./components/MovieDetails/MovieDetails";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useFilmStore } from "./store/movieStore";

export default function Home() {
  const queryClient = new QueryClient()
  const { selectedMovie, setSelectedMovie } = useFilmStore();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1>Films</h1>
          <SearchBar/>
          <MoviesList />
          {selectedMovie && (
            <MovieDetail movieInfo={selectedMovie} onClose={() => setSelectedMovie(null)} />
          )}
        </div>
      </main>
    </QueryClientProvider>
  );
}