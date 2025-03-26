import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/", // your Django API URL
  headers: {
    "Content-Type": "application/json",
    // Optionally add more headers here.
  },
});

// Optionally intercept request or response here
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Adjust based on your token storage practice
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`; // For using JWT or OAuth
  }
  return config;
});

export default api;
