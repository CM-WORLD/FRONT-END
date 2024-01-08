import { useEffect } from "react";

import { API } from "../../../common/Request";

import "./style.scss";

const LoginLoading = () => {
  /** 카카오 인가 코드 */
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    API.post("/process/kakao", { code: code }).then((resp) => {
      const { accessToken, refreshToken, grantType, nick } = resp.data.tokens;

      localStorage.setItem("atk", accessToken);
      localStorage.setItem("rtk", refreshToken);
      localStorage.setItem("nick", nick);

      window.location.href = "/";
    });
  }, []);
  return (
    <div className="login-loading-content">
      <h1 className="login-loading-title">
        지금 로그인 중입니다. 잠시만 기다려 주세요...
      </h1>
    </div>
  );
};

export default LoginLoading;
