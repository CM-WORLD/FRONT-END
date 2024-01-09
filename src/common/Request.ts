import axios from "axios";
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

/* 토큰 조회 */
export const getAtk = () => {
  return localStorage.getItem("atk");
}

export const getRtk = () => {
  return localStorage.getItem("rtk");
}

export const getNick = () => {
  return localStorage.getItem("nick");
}

/* test용 인증 interceptor */
export const AUTH_ITC = axios.create({
  baseURL: "http://localhost:8080",  //모든 요청에 처리하면 안되므로 추후 백엔드 인증 ept는 맨 앞에 /auth 추가하기. 
  headers: {
    withCredentials: true, 
    Authorization: `Bearer ${getAtk()}`,
    RefreshToken: getRtk(),
  }
}).get("/validate/token");
