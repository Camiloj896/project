import axios from "axios";

const axiosHelper = () => {
  const baseURL = process.env.REACT_APP_API_URL;

  let headers = {
    'Content-Type': 'application/json'
  };

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise(resolve => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise(reject => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};

export default axiosHelper;