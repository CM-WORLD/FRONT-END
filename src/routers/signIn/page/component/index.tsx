import Button from "../../../../components/button";
import Input from "../../../../components/input";
import InputLine from "../../../../components/inputLine";
import "./style.scss";

const LoginBtnsComponent = () => {
  return (
    <>
      <div className="sign-in-base">
        <div className="w-1/2 relative m-auto my-5 border border-gray-300 rounded p-5">
          <h1 className="font-bold text-center ">로그인</h1>
          <InputLine
            label="이메일"
            placeholder="이메일을 입력하세요"
            value="email"
            onChange={() => {}}
          />
          <div className="flex justify-center">
            <Button
              value="카카로 로그인"
              color="Primary"
              onClick={() => {
                const clientId = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;
                const redUrl = import.meta.env
                  .VITE_REACT_APP_KAKAO_LOGIN_REDIRECT_URL_LOCAL;
                const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redUrl}&response_type=code&scope=talk_message&email`;
                window.location.href = url;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBtnsComponent;
