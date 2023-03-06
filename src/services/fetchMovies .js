import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'a148ed5961285512fd3954af576af4a0';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
