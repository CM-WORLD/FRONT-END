import "./style.scss";

const SignInPage = () => {
  return (
    <>
      <div className="sign-in-wrapper">
        <h1>Sign In</h1>

        <div className="btn-form">
          <button className="naver">네이버로 로그인</button>
          <button className="kakao">카카오로 로그인</button>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
