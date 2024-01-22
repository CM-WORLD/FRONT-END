import { useEffect, useState } from "react";

import { REQUEST_GET, getNick } from "../../libs/request";

const NavBar = () => {
  const [isLogined, setIsLogined] = useState(false);

  // const validateTk = () => {
  //   axios
  //     .create({
  //       headers: {
  //         withCredentials: true,
  //         Authorization: `Bearer ${getAtk()}`,
  //         RefreshToken: getRtk(),
  //       },
  //     })
  //     .get(HOST_URL + "/validate/token")
  //     .then((resp) => {
  //       const status = resp.data.status;
  //       if (status === 205) {
  //         localStorage.setItem("atk", resp.data.newAtk);
  //         setIsLogined(true);
  //       } else if (status === 200) {
  //         setIsLogined(true);
  //       } else setIsLogined(false);
  //     })
  //     .catch((error) => setIsLogined(false));
  // };

  const redirectUrl = import.meta.env.VITE_REACT_APP_KAKAO_LOGOUT_URL_LOCAL;
  const clientId = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;

  const loginCheck = (status) => {
    if (status === 200 || status === 205) setIsLogined(true);
    else setIsLogined(false);
  };

  useEffect(() => {
    REQUEST_GET(
      "/login/check",
      {},
      (data) => {
        loginCheck(data.status);
      },
      "private",
      false
    );
  }, []);
  return (
    <>
      <nav className="h-24"></nav>
      <nav className="bg-white dark:bg-gray-900 fixed w-full h-24 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <ul className="flex ml-auto">
            {isLogined ? (
              <>
                <li>
                  <a href="/mypage/cms">안녕하세요! {getNick()}님</a>
                </li>
                <li className="ml-5">
                  <a href="/mypage/cms">내 커미션 정보</a>
                </li>
                <li className="ml-5">
                  <a
                    href={`https://kauth.kakao.com/oauth/logout?client_id=${clientId}&logout_redirect_uri=${redirectUrl}`}
                  >
                    로그아웃
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a
                  href="/sign/in"
                  onClick={() => {
                    localStorage.setItem("referer", window.location.pathname);
                  }}
                >
                  로그인
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              jinvicky
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/posts"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Illust
                </a>
              </li>
              <li>
                <a
                  href="/commissions"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Commission
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
