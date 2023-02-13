import axios from "axios";

const api = axios.create({
  baseURL: "https://m6-client-networking-backend.onrender.com",

  timeout: 5000,
});

export default api;

// baseURL: "https://m6-client-networking-backend.onrender.com",