import { create } from 'zustand';
import { MovieState, Movie, MovieRated } from '../types';
import { createGuestSession, rateFilm, getRatedMovies } from '../lib/api';

export const useFilmStore = create<MovieState>()((set, get) => ({
  movies: [],
  ratedMovies: [],
  searchQuery: '',
  selectedMovie: null,
  guestSessionId:
    typeof window !== 'undefined'
      ? localStorage.getItem('guestSessionId')
      : null,

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setMovies: (movies: Movie[]) => set({ movies }),
  setSelectedMovie: (movie: Movie | null) => set({ selectedMovie: movie }),

  initGuestSession: async () => {
    let sessionId = get().guestSessionId;
    if (!sessionId) {
      sessionId = await createGuestSession();
      if (typeof window !== 'undefined') {
        localStorage.setItem('guestSessionId', sessionId!);
      }
    }
    set({ guestSessionId: sessionId });
  },

  rateMovie: async (movieId: number, rating: number) => {
    const { guestSessionId } = get();
    if (!guestSessionId) {
      console.error('No guest session available');
      return;
    }
    try {
      await rateFilm(movieId, rating, guestSessionId!);
      set((state) => ({
        ratedMovies: [
          ...state.ratedMovies,
          { ...state.selectedMovie, rating } as MovieRated,
        ],
      }));
    } catch (error) {
      console.error('Error rating movie:', error);
    }
  },

  getRatedMovies: async () => {
    const { guestSessionId } = get();
    if (!guestSessionId) {
      console.error('No guest session');
      return;
    }
    try {
      const ratedMovies = await getRatedMovies(guestSessionId);
      set({ ratedMovies });
    } catch (error) {
      console.error('Error fetching rated movies:', error);
    }
  },
}));
