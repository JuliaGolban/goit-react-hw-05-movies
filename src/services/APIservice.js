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

function fetchDataByID({ id, path }) {
  const pathURL = path ? `movie/${id}/${path}` : '';
  const pathParams = `movie/${id}${pathURL}`;
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${pathParams}?${queryParams}`);
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

fetchDataByID.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export { fetchData, fetchDataByID };
