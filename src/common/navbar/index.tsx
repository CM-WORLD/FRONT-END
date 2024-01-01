/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-auth">
          <ul>
            <li>
              <a href="/mypage/cms">내 커미션 정보</a>
            </li>
            <li>
              <a href="/sign/in">로그인</a>
            </li>
            <li>
              <a href="/sign/out">로그아웃</a>
            </li>
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
