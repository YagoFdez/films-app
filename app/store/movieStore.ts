import { create } from 'zustand'
import { MovieState, Movie } from '../types'
import { getPopularFilms, searchMovies } from '../lib/api';


export const useFilmStore = create<MovieState>()((set) => ({
    movies: [],
    searchQuery: '',
    selectedMovie: null,

    setSearchQuery: (query: string) => set({ searchQuery: query }),
    setMovies: (movies: Movie[]) => set({movies}),
    setSelectedMovie: (movie: Movie | null) => set({selectedMovie: movie})

}));
