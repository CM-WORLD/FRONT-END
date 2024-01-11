import { useEffect, useState } from "react";
import axios from "axios";

import { HOST_URL, getAtk, getRtk } from "../Request";
import "./style.scss";
const NavBar = () => {
  const [isLogined, setIsLogined] = useState(false);

  const validateTk = () => {
    axios
      .create({
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${getAtk()}`,
          RefreshToken: getRtk(),
        },
      })
      .get(HOST_URL + "/validate/token")
      .then((resp) => {
        console.log(resp.data);
        const status = resp.data.status;
        if (status === 205) {
          localStorage.setItem("atk", resp.data.newAtk);
          setIsLogined(true);
        } else if (status === 200) {
          setIsLogined(true);
        } else setIsLogined(false);
      })
      .catch((error) => setIsLogined(false));
  };

  const redirectUrl = import.meta.env.VITE_REACT_APP_KAKAO_LOGOUT_URL_LOCAL;
  const clientId = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;

  useEffect(() => {
    validateTk();
  }, []);
  return (
    <>
      <nav className="nav">
        <div className="nav-auth">
          <ul>
            {isLogined ? (
              <>
                <li>
                  <a href="/mypage/cms">안녕하세요! {localStorage.getItem("nick")}님</a>
                </li>
                <li>
                  <a href="/mypage/cms">내 커미션 정보</a>
                </li>
                <li>
                  <a href={`https://kauth.kakao.com/oauth/logout?client_id=${clientId}&logout_redirect_uri=${redirectUrl}`}>
                    로그아웃
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a href="/sign/in">로그인</a>
              </li>
            )}
          </ul>
        </div>
        <ul>
          <li>
            <a href="/posts">Illust</a>
          </li>
          <li>
            <a href="/commissions">Commission</a>
          </li>
          <li>
            <a href="/reviews">Review</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
