import { useEffect } from "react";

import CommonLoading from "../../../components/loading";
import { API } from "../../../common/Request";

import "./style.scss";

const KakaoLoginLoading = () => {
  /** 카카오 인가 코드 */
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    API.post("/process/kakao", { code: code }).then((resp) => {
      const {nick} = resp.data;
      const { accessToken, refreshToken, grantType } = resp.data.tokens;

      if (accessToken && refreshToken && nick) {
        localStorage.setItem("atk", accessToken);
        localStorage.setItem("rtk", refreshToken);
        localStorage.setItem("nick", nick);
      }

      const referer = localStorage.getItem("referer");
      //포트 제외 url
      const prevUrl = window.location.pathname;

      if(referer === null || prevUrl === "/login/kakao" || prevUrl === "/sign/in") window.location.href = "/";
      else window.location.href = referer;
    });
  }, []);
  return <CommonLoading desc="로그인 처리 중입니다." />;
};

export default KakaoLoginLoading;
