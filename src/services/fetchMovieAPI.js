import axios from 'axios';
import {
  TMDB_API_ENDPOINTS,
  TMDB_API_URL,
  ERROR_404_MESSAGE,
} from './constants';

axios.defaults.baseURL = TMDB_API_URL;
axios.defaults.params = { api_key: process.env.REACT_APP_TMDB_API_KEY };

export async function fetchTrendingMovie() {
  try {
    const response = await axios(TMDB_API_ENDPOINTS.TRENDING_MOVIES);
    return response.data.results;
  } catch {
    throw new Error(ERROR_404_MESSAGE);
  }
}

export async function fetchMovieByKeyword(keyword) {
  const queryParams = `?query=${keyword}`;

  try {
    const response = await axios(
      `${TMDB_API_ENDPOINTS.SEARCH_MOVIE}${queryParams}`
    );

    return response.data.results;
  } catch {
    throw new Error(ERROR_404_MESSAGE);
  }
}

export async function fetchMovieDetailsById(id, extraInfo = '') {
  const extraInfoPath = extraInfo ? `/${extraInfo}` : '';

  try {
    const response = await axios(
      `${TMDB_API_ENDPOINTS.MOVIE_DETAILS}${id}${extraInfoPath}`
    );
    return response.data;
  } catch {
    throw new Error(ERROR_404_MESSAGE);
  }
}
