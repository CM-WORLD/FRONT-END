/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-auth">
          <ul>
            <li>
              <a href="/mypage">마이페이지</a>
            </li>
            <li>
              <a href="/signin">로그인</a>
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
            <a href="">Ask</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
