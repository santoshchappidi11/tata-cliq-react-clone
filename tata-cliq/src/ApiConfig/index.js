import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8003",
});

export default api;
