import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "https://run.mocky.io/v3",
//   withCredentials: true,
// });

export function getUserInfo() {
  return axios.request({
    method: "get",
    url: "https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2",
  });
}
