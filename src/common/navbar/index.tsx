import { useEffect, useState } from "react";
import { getAtk, getRtk } from "../Request";
import "./style.scss";
import axios from "axios";

const NavBar = () => {
  const [isLogined, setIsLogined] = useState(false);

  const validateTk = () => {
    if (getAtk() === null || getRtk() === null) setIsLogined(false);

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
        console.log(resp.data.status);
        if (resp.data.status === 200) {
          setIsLogined(true);
        } else setIsLogined(false);
      });
  };

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
                  <a href="/sign/out">로그아웃</a>
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
