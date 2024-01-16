import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import CommonLoading from "../../../components/loading";
import { HOST_URL } from "../../../libs/const";
import { getAtk, getRtk } from "../../../libs/request";


const LoginBtnsComponent = React.lazy(() => import('../../signIn/page/component'))
const BadRequest = React.lazy(() => import('../../../components/error/badRequest'));

const SignInPage = () => {
  const [notLogined, setNotLogined] = useState(true);

  useEffect(() => {
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
        const status = resp.data.status;
        if (status === 205) {
          localStorage.setItem("atk", resp.data.newAtk);
          setNotLogined(false);
        } else if (status === 200) {
          // 유효한 액세스 토큰
          setNotLogined(false);
        } else if (status === 500) {
          // 서버 에러
          setNotLogined(true);
        } else if (status === 415) {
          //로그인 필요
          setNotLogined(true);
        }
      })
      .catch((error) => {
        setNotLogined(false);
      });
  }, []);

  return (
    <>
    <Suspense fallback={<CommonLoading />}>
      {notLogined ? 
      <><LoginBtnsComponent /></> 
      : <BadRequest desc="이미 로그인 되어 있습니다." />
      }
    </Suspense>
    </>
  );
};

export default SignInPage;
