import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restapinodejs.onrender.com/api",
});

export const status = Object.freeze({
  idle: "SUCCESS",
  loading: "LOADING",
  error: "ERROR",
});

export const blogImage = (imageData) => {
  return `https://restapinodejs.onrender.com/api/blog/image/${imageData}`;
};

export const categoryFetch = (categoryID) => {
  return `https://restapinodejs.onrender.com/api/category/post/${categoryID}`;
};

export const testimonialsImage = (id) => {
  return `https://restapinodejs.onrender.com/api/testimonials/photo/${id}`;
};

export const teamImage = (id) => {
  return `https://restapinodejs.onrender.com/api/team/photo/${id}`;
};

export default axiosInstance;
