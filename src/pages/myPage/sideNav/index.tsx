import "./style.scss";

const SideNav = () => {
  return (
    <>
      <ul className="side-nav">
        <li>
          <a href="/mypage/inquiry">1:1 문의</a>
        </li>
        <li>
          <a href="/mypage/commissions">커미션 신청</a>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
