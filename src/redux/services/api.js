import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.2.44:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
