import "./style.scss";

const SignInPage = () => {
  return (
    <>
      <div className="sign-in-base">
        <div className="sign-in-wrapper">
          <h1>비회원 조회</h1>
          <div className="search-cms">
            <input
              className="input"
              type="text"
              placeholder="커미션 번호를 입력해 주세요"
            />
            <button className="search-btn">조회</button>
          </div>
          <p>*해당 커미션 1건에 대해서만 조회가 가능합니다.</p>
        </div>
        <div className="sign-in-wrapper">
          <h1>로그인</h1>

          <div className="btn-form">
            <button className="naver">네이버로 로그인</button>
            <button className="kakao">카카오로 로그인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
