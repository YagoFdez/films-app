import axios from "axios";

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