import { useEffect } from "react";

import { getRtk } from "../../../common/Request";

import axios from "axios";

import "./style.scss";

const SignOutLoading = () => {

  useEffect(() => {
    axios.post("/invalidate/token", JSON.stringify({rtk: getRtk()})).then((resp) => {
      console.log("invalidate", resp);
    });
  }, []);

  return (
    <>
      <div>로그아웃 중입니다... 잠시만 기다려 주세요</div>
    </>
  );
};

export default SignOutLoading;
