import axios from "axios";

const coreApi = axios.create({
  baseURL: process.env.PATH_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Add request interceptor
coreApi.interceptors.request.use(
  (config) => {
    // You can modify request config here (e.g. add auth tokens)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor
coreApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default coreApi;
