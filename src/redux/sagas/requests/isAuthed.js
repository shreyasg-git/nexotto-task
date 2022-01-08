import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "https://run.mocky.io/v3",
//   withCredentials: true,
// });

export function postIsAuthenticated(data) {
  return axios.request({
    method: "get",
    url: "https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119",
    data: data,
  });
}
