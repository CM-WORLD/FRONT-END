import { useEffect } from "react";

import { getRtk } from "../../../common/Request";

import axios from "axios";

import "./style.scss";

const SignOutLoading = () => {
  useEffect(() => {
    axios
      .post("/invalidate/token", null, {
        headers: {
          WithCredentials: true,
          RefreshToken: getRtk(),
        },
      })
      .then((resp) => {
        console.log("invalidate", resp);
        if(resp.data.status === 200) {
            localStorage.removeItem("atk")
            localStorage.removeItem("rtk")
            localStorage.removeItem("referer")
            localStorage.removeItem("nick")

            window.location.href = "/"; //최종적으로 메인으로 이동
        }
      });
  }, []);

  return (
    <>
      <div>로그아웃 중입니다... 잠시만 기다려 주세요</div>
    </>
  );
};

export default SignOutLoading;
