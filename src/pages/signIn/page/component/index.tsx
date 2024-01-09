import "./style.scss";

const LoginBtnsComponent = () => {
  return (
    <>
      <div className="sign-in-base">
        <div className="sign-in-wrapper">
          <h1>로그인</h1>
          <div className="btn-form">
            <button className="naver">네이버로 로그인</button>
            <button
              className="kakao"
              onClick={() => {
                const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
                const redUrl =
                  process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URL_LOCAL;
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
  );
};

export default LoginBtnsComponent;
