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
    selectedMovie: Movie | null;
    setSearchQuery: (query: string) => void;
    setSelectedMovie: (movie: Movie | null) => void;
    setMovies: (movies: Movie[]) => void;
    
}