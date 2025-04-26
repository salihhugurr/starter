import axios from 'axios';

import { API_CONFIG } from '@config/apiConfig';

export const API = axios.create(API_CONFIG);

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
