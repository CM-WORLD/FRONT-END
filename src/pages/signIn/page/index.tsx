import { useEffect, useState } from "react";
import axios from "axios";

import BadRequest from "../../../components/error/badRequest";
import { getAtk, getRtk } from "../../../common/Request";

import "./style.scss";

const SignInPage = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios
      .create({
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${getAtk()}`,
          RefreshToken: getRtk(),
        },
      })
      .get("/validate/token")
      .then((resp) => {
        console.log(resp.data);
        const status = resp.data.status;
        if (status === 205) {
          localStorage.setItem("atk", resp.data.newAtk);
          setDisplay(false);
        } else if (status === 200) { // 유효한 액세스 토큰
          setDisplay(false);
        } else if (status === 500) { // 서버 에러 
          setDisplay(true);
        } else if (status === 415) { //로그인 필요
          setDisplay(true);
        }
      })
      .catch((error) => setDisplay(false));

  }, []);
  return display ? (
    <>
      <div className="sign-in-base">
        <div className="sign-in-wrapper">
          <h1>로그인</h1>
          <div className="btn-form">
            <button className="naver">네이버로 로그인</button>
            <button
              className="kakao"
              onClick={() => {
                localStorage.setItem("referer", window.location.href); //다시 돌아가기 위한 이전 경로 저장
                const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
                const redUrl = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URL_LOCAL;
                const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redUrl}&response_type=code&scope=talk_message&email`;
                window.location.href = url;
              }}
            >
              카카오로 로그인
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <BadRequest desc="이미 로그인 되어 있습니다" />
  );
};

export default SignInPage;
