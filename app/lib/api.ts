import axios from "axios";
import { MovieRated } from "../types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    params: {api_key: API_KEY},
})

export const getPopularFilms = async () => {
    try {
      const response = await api.get('/movie/popular');
      return response.data.results; 
    } catch (error) {
      console.error('Error fetching popular films:', error);
      throw error;
    }
  };

export const searchMovies = async (query:string) => {
  try {
     const response = await api.get('/search/movie', { params: { query }});
     return response.data.results;
  } catch (error) {
    console.error('Error searching movie:', error);
    throw error;
  }
};

  export  const createGuestSession = async() => {
    const response = await api.get('/authentication/guest_session/new')
    return response.data.guest_session_id;
  }

  export const  rateFilm = async (movieId:number, rating: number, guestSessionId: string) => {
    return api.post(`/movie/${movieId}/rating`, {value:rating},{
      params: { guest_session_id: guestSessionId}
    })
  }

  export const getRatedMovies = async (guestSessionId: string): Promise<MovieRated[]> => {
    try {
      const response = await api.get('/guest_session/' + guestSessionId + '/rated/movies', {
        params: {
          sort_by: 'created_at.asc'
        }
      });
      return response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        rating: movie.rating
      }));
    } catch (error) {
      console.error('Error fetching rated movies:', error);
      throw error;
    }
  }
  