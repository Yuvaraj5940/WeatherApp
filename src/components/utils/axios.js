import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=43ca3500399e463ba8b101827230506 &q=',
  timeout: 2000,
  timeoutErrorMessage: 'Try after some time',
});

axiosInstance.interceptors.request.use(
  config =>
    // Do something before request is sent
    config,
  error =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  error => {
    if (error?.response?.data) {
      return Promise.reject(new Error(error.response.data));
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error);
  },
);

export default axiosInstance;
