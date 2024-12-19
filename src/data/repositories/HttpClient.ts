import axios from "axios";

const HttpClient = axios.create({
  baseURL: import.meta.env.BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;
