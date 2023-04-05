import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '42ab61f5920475fba7f6e6af12ec3589';

export async function fetchTrending() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoviesForRequest(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieForId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieForIdAndParams(id, params) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/${params}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
