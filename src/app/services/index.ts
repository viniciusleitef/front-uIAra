import axios from "axios";

export const api = axios.create({
  baseURL: "https://150.165.167.12:8300/",
});
