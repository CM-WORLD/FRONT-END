import axios from "axios";
import { HOST_URL } from "./Const";

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

export const setNickName = (nick: string) => {
  localStorage.setItem("nick", nick);
};

export const setRefreshToken = (rtk: string) => {
  localStorage.setItem("rtk", rtk);
};

/** 로그인 성공 시 콜백 함수 */
export const signinCallback = (accessToken, refreshToken, nickName, provider) => {
  setAccessToken(accessToken);
  setNickName(nickName);
  setRefreshToken(refreshToken);
  localStorage.setItem("provider", provider);

  const referer = localStorage.getItem("referer");
  if (referer === null || referer === "/sign/in") window.location.href = "/";
  else window.location.href = referer;
};

/** 로그아웃 콜백 함수 */
export const signOutCallback = () => {
  localStorage.removeItem("atk");
  localStorage.removeItem("rtk");
  localStorage.removeItem("nick");
  localStorage.removeItem("provider");
  window.location.href = "/";
}

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
