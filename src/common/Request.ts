import axios, { AxiosResponse } from "axios";
import qs from 'qs'

export const HOST_URL = "http://localhost:8080";

export default axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

/** axios 생성 공통 메서드,  */

export const API_JSON = axios.create({
  baseURL: "http://localhost:8080", 
  headers: {
    "Content-Type": "application/json", 
  }, 
  withCredentials: true, 
});

export const API = axios.create({
  baseURL: "http://localhost:8080",  
  withCredentials: true, 
});

export const getAtk = () => {
  return localStorage.getItem("atk");
}

export const getRtk = () => {
  return localStorage.getItem("rtk");
}
