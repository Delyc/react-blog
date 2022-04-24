import axios from "axios";

const base = "https://fress-media.herokuapp.com";
const axiosBase = axios.create({
  baseURL: base,
  withCredentials: false,
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    "accept-language": "en",
    "Access-Control-Allow-Origin": "true",
  },
});

axiosBase.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = localStorage.getItem("token");
  return config;
});

axiosBase.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    let original = error.config;
    if (error?.response?.status == 401 && !original._retry) {
      const data = JSON.parse(localStorage.getItem("user")) || {};
      original._retry = true;

      if (Object.keys(data).length == 0) {
        return (window.location.href = `/login?next=${window.location.pathname}`);
      }
      const res = await axiosBase.post("/users/authenticate", data);
      localStorage.setItem("token", res?.data.content.token);
      original.headers["x-auth-token"] = res?.data.content.token;
      return axiosBase(original);
    }
    return Promise.reject(error);
  }
);

export default axiosBase;
