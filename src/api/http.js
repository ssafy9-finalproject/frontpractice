import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/",
  //baseURL: "http://70.12.50.200:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
