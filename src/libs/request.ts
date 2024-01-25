import axios from "axios";
import qs from "qs";

import { HOST_URL } from "./Const";
import { EApiStatus } from "../defines/api";

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

axios.defaults.withCredentials = true;

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

export const setAccessToken = (atk: string) => {
  localStorage.setItem("atk", atk);
};

/* local */
export const checkToken = () => {
  if (getAtk() === null || getAtk().replace(" ", "") === "") {
    // alert("로그인 후 이용해 주세요");
    // ALERT 2번 중복 발생 TODO:: 리팩토링 필요
    window.location.href = "/sign/in";
  }
};

/* 비로그인 시 콜백 */
export const NoAuthRedirect = () => {
    alert("로그인 후 이용해 주세요");
    localStorage.setItem("referer", window.location.pathname);
    window.location.href = "/sign/in";
};

// 밑에 다 필요없음.

/* TODO:: 리팩토링 이후 삭제 */
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
  else if (status === 205) {
    // atk 재발급
    if (resp.data.newAtk) {
      localStorage.setItem("atk", resp.data.newAtk);
    }
  } else {
    //415, 500, 505
    localStorage.setItem("referer", window.location.pathname);
    window.location.href = "/sign/in";
  }

  return resp;
});

// refactoring .....
const AUTH_HEADER = {
  Authorization: `Bearer ${getAtk()}`,
  RefreshToken: getRtk(),
};

export const REQUEST_GET = async (
  url: string,
  params: {},
  callback: Function,
  type: string,
  redirect?: boolean
) => {
  const resp = await axios
    .create({
      baseURL: HOST_URL,
      headers: {
        Authorization: `Bearer ${getAtk()}`,
        RefreshToken: getRtk(),
        type: type,
      },
    })
    .get(url, params);

  if (resp.data.status === 200) {
    if (resp.data) callback(resp.data);
    if (resp.data.newAtk) setAccessToken(`${resp.data.newAtk}`); // atk 재발급
  } else {
    if (redirect) {
      localStorage.setItem("referer", window.location.pathname);
      alert("로그인이 필요합니다.");
      window.location.href = "/sign/in";
    }
    // 415, 500, 505 ::login required
  }
};

export const REQUEST = async (
  url: string,
  params: {},
  callback: Function,
  type: string,
  redirect?: boolean
) => {
  const resp = await axios
    .create({
      baseURL: HOST_URL,
      headers: {
        Authorization: `Bearer ${getAtk()}`,
        RefreshToken: getRtk(),
        type: type,
      },
    })
    .get(url, params);

  if (resp.data.status === 200) {
    if (resp.data) callback(resp.data);
    if (resp.data.newAtk) setAccessToken(`${resp.data.newAtk}`); // atk 재발급
  } else {
    if (redirect) {
      localStorage.setItem("referer", window.location.pathname);
      alert("로그인이 필요합니다.");
      window.location.href = "/sign/in";
    }
    // 415, 500, 505 ::login required
  }
};
