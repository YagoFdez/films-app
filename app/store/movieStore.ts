import { create } from 'zustand'
import { MovieState } from '../types'
import { getPopularFilms, searchMovies } from '../lib/api';


export const useFilmStore = create<MovieState>()((set) => ({
    movies: [],
    searchQuery: '',

    setSearchQuery: (query: string) => set({ searchQuery: query }),

    fetchMovies: async () => {
        try {
          const movies = await getPopularFilms();
          set({ movies });
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      },
    
      searchMovies: async (query:string) => {
        try {
          const movies = await searchMovies(query);
          set({ movies });
        } catch (error) {
          console.error('Error searching movies:', error);
        }
      },

}));
