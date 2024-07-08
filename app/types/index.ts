export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
}

export interface MovieState {
    movies: Movie[];
    searchQuery: string;
    fetchMovies: () => Promise<void>;
    searchMovies: (query : string) => Promise<void>;
    setSearchQuery: (query: string) => void;
}