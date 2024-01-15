import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE_BLOG_API_BASE,
});

export default server;
