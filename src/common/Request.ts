import axios from "axios";
import qs from "qs";
import { HOST_URL } from "../libs/Const";

export default axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

/* 토큰 조회 */
export const getAtk = () => {
  return localStorage.getItem("atk");
};

export const getRtk = () => {
  return localStorage.getItem("rtk");
};

export const getNick = () => {
  return localStorage.getItem("nick");
};

/* test용 인증 interceptor */
export const AUTH_ITC = axios.create({
  baseURL: HOST_URL,
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${getAtk()}`,
    RefreshToken: getRtk(),
  },
});

AUTH_ITC.interceptors.response.use((resp) => {
  const status = resp.data.status;
  if (status === 200) return resp;
  else if (status === 205) { // atk 재발급
    if (resp.data.newAtk) {
      localStorage.setItem("atk", resp.data.newAtk);
    }
  } else { //415, 500, 505
    localStorage.setItem("referer", window.location.pathname);
    window.location.href = "/sign/in";
  }

  return resp;
});
