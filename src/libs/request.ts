import axios from "axios";
import qs from "qs";
import { HOST_URL } from "./const";

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

// refactoring .....
const AUTH_HEADER = {
  Authorization: `Bearer ${getAtk()}`,
  RefreshToken: getRtk(),
}

export const AUTH_AJAX = () => axios.create({
  baseURL: HOST_URL,
  headers: {
    withCredentials: true,
    ...AUTH_HEADER,
  },
}).get("/validate/token").then((resp) => {
  const status = resp.data.status;
  if (status === 200) return resp;
  else if (status === 205) { // atk 재발급
    if (resp.data.newAtk) {
      localStorage.setItem("atk", resp.data.newAtk);
    }
    return resp;
  } else { //415, 500, ::login required
    localStorage.setItem("referer", window.location.pathname);
    window.location.href = "/sign/in";
  }
});

/** get axios 중복 제거 테스트용 */
export const GET_AJAX = (url: string , callback: Function, authRequired: boolean) => {
  return axios.create({
    baseURL: HOST_URL,
    headers: {
      withCredentials: true,
      ...(authRequired ? AUTH_HEADER : {})
    },
  }).get(url).then(resp => {
    if(resp.data.status === 200 && resp.data) {
      callback(resp.data);
    }
  });
}