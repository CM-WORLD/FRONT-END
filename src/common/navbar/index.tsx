/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
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
