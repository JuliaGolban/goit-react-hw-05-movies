import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6d6a84090fff66fc1fd25eac643a37be';

// const pathParams = [
//   { trend: 'trending/movie/day' },
//   { search: 'search/movie' },
//   { movieDetails: `movie/${movieId}` },
//   { cast: `movie/${movieId}/credits` },
//   { reviews: `movie/${movieId}/reviews` },
// ];

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      api_key: API_KEY,
    },
  });

  return await axiosInstance.get();
}

// function fetchSearchMovies({ searchQuery }) {
//   const pathParams = 'search/movie';
//   const queryParams = new URLSearchParams({
//     key: API_KEY,
//     query: searchQuery,
//   });
//   return axios.get(`${pathParams}?${queryParams}`);
// }

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

export { fetchData };
