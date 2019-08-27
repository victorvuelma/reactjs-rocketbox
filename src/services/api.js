import axios from 'axios';

const api = axios.create({
  baseURL: 'https://expressjs-rocketbox-api.herokuapp.com'
});

export default api;