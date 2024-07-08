export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
}

export interface MovieRated extends Movie {
    rating: number;
}

export interface MovieState {
    movies: Movie[];
    ratedMovies: MovieRated[];
    searchQuery: string;
    selectedMovie: Movie | null;
    guestSessionId: string | null;

    setSearchQuery: (query: string) => void;
    setSelectedMovie: (movie: Movie | null) => void;
    setMovies: (movies: Movie[]) => void;
    initGuestSession: () => Promise<void>;
    rateMovie: (movieId: number, rating: number) => Promise<void>;
    getRatedMovies: () => Promise<void>;

}