import Button from "../../../../components/button";
import Locale, { getLocaleToString } from "../../../../components/locale";
import { EAccountType } from "../../../../defines/account";
import { AssetsRoot, HOST_URL } from "../../../../libs/Const";
import "./style.scss";

const LoginBtnsComponent = () => {
  const kakaoId = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;
  const kakaoRedirectUrl = import.meta.env
    .VITE_REACT_APP_KAKAO_LOGIN_REDIRECT_URL_LOCAL;

  const naverId = import.meta.env.VITE_REACT_APP_NAVER_CLIENT_ID;
  const naverRedirectUrl = import.meta.env
    .VITE_REACT_APP_NAVER_REDIRECT_URL_LOCAL;

  const loginButtonHandler = (type: EAccountType) => {
    switch (type) {
      case EAccountType.Kakao:
        const url = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoId}&redirect_uri=${kakaoRedirectUrl}&response_type=code&scope=talk_message&email`;
        window.location.href = url;
        return;
      case EAccountType.Twitter:
        window.location.href = `${HOST_URL}/sign/in/twitter`;
        // TODO:: 트위터 로그인 api 적용
        return;
      case EAccountType.Naver:
        // TODO:: 네이버 로그인 api 적용
        window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverId}&redirect_uri=${naverRedirectUrl}`;
        return;
      default:
        // 사용되지않습니다.
        return;
    }
  };

  return (
    <div className="LoginContainer max-w-md relative m-auto shadow-md p-5 my-16">
      <h1 className="font-bold text-center mb-4">
        <Locale k="twitter_login" />
      </h1>
      <div className="flex justify-center flex-col gap-3">
        <Button
          className="cursor-pointer bg-kakao "
          onClick={() => loginButtonHandler(EAccountType.Kakao)}
        >
          <div className="relative flex justify-center items-center text-black">
            <img
              className="absolute left-0"
              src={`${AssetsRoot}/images/kakao.png`}
              alt="kakao login"
              onClick={() => loginButtonHandler(EAccountType.Kakao)}
            />
            <span>
              <Locale k="kakao_login" />
            </span>
          </div>
        </Button>

        <Button onClick={() => loginButtonHandler(EAccountType.Naver)}>
          <Locale k="naver_login" />
        </Button>
        <Button
          className="cursor-pointer bg-twitter"
          color="Primary"
          onClick={() => loginButtonHandler(EAccountType.Kakao)}
        >
          <div className="relative flex justify-center items-center">
            <img
              className="absolute -left-1.5 w-8 h-8"
              src={`${AssetsRoot}/images/twitter.png?v=2`}
              alt="twitter login"
              onClick={() => loginButtonHandler(EAccountType.Twitter)}
            />
            <span>
              <Locale k="twitter_login" />
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default LoginBtnsComponent;
