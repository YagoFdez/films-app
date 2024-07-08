'use client'

import { MoviesList } from "./components/MovieList/MoviesList";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Movie } from "./types";
import { useState } from "react";
import { MovieDetail } from "./components/MovieDetails/MovieDetails";
import { SearchBar } from "./components/SearchBar/SearchBar";

export default function Home() {
  const queryClient = new QueryClient()
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = (movie : Movie) => {
    setSelectedMovie(movie);
  }

  const handleCloseModal = () => {
    setSelectedMovie(null)
  }

  return (
    <QueryClientProvider client={queryClient}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1>Films</h1>
                <SearchBar/>
                <MoviesList onMovieClick={handleMovieClick} />
                {selectedMovie && (
                    <MovieDetail movieInfo={selectedMovie} onClose={handleCloseModal} />
                )}
            </div>
        </main>
    </QueryClientProvider>
  );
}
