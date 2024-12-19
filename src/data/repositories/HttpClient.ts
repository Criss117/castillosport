import axios from "axios";
import { BACK_URL } from "astro:env/server";

const HttpClient = axios.create({
  baseURL: BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;
