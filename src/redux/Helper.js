import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restapinodejs.onrender.com/api",
});

export const status = Object.freeze({
  idle: "SUCCESS",
  loading: "LOADING",
  error: "ERROR",
});

export default axiosInstance;
