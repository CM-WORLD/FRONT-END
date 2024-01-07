import { useEffect } from "react";

import { API } from "../../../common/Request";

const LoginLoading = () => {
  /** 카카오 인가 코드 */
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    API.post("/process/kakao", { code: code }).then((resp) => {
      const { accessToken, refreshToken, grantType } = resp.data.tokens;

      // 토큰들을 받아서 로컬 스토리지에 저장한다.

      localStorage.setItem("atk", accessToken);
      localStorage.setItem("rtk", refreshToken);
      //

      //   window.location.href = "/";
    });
  }, []);
  return <>지금 로그인 중입니다. 잠시만 기다려 주세요... </>;
};

export default LoginLoading;
