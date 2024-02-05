import { useEffect } from "react";

import CommonLoading from "../../../components/loading";
import { ApiClient } from "../../../libs/ApiClient";

const SigninTwitterLoading = () => {
  useEffect(() => {
    const oauthToken = new URL(window.location.href).searchParams.get(
      "oauth_token"
    );
    const oauthVerifier = new URL(window.location.href).searchParams.get(
      "oauth_verifier"
    );
    ApiClient.getInstance().post(
      "/process/twitter",
      {
        oauthToken: oauthToken,
        oauthVerifier: oauthVerifier,
      },
      (data) => {
        console.log("success", data);

        window.location.href = "/";
        // const referer = localStorage.getItem("referer");
      // if (
      //   referer === null ||
      //   referer === "/login/kakao" ||
      //   referer === "/sign/in"
      // ) {
      //   window.location.href = "/";
      // } else window.location.href = referer;
      },
      (data) => {
        console.log("error: ", data);
      }
    );

    // my id : 773090135688687600, id별 고유

  }, []);
  return <CommonLoading desc="로그인 처리 중입니다." />;
};

export default SigninTwitterLoading;
