import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

const API_ENDPOINT = process.env.API_ENDPOINT as string;

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 3000,
  // withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("accessToken");
      redirect("/sign-in");
    }
    return Promise.reject(error);
  }
);

export const getRequest = async (url: string) => {
  return axiosClient.get(`/${url}`).then((response) => response);
};

export const postRequest = async (url: string, payload: unknown) => {
  return axiosClient.post(`/${url}`, payload).then((response) => response);
};

export const patchRequest = async (url: string, payload: unknown) => {
  return axiosClient.patch(`/${url}`, payload).then((response) => response);
};

export const deleteRequest = async (url: string) => {
  return axiosClient.delete(`/${url}`).then((response) => response);
};
