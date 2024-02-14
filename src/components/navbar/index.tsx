import { useEffect, useState } from "react";

import { getNick } from "../../libs/request";
import { ApiClient } from "../../libs/ApiClient";
import Locale from "../locale";
import { AssetsRoot } from "../../libs/Const";

const NavBar = () => {
  const [isLogined, setIsLogined] = useState(false);

  // TODO:: 소셜 타입별 로그아웃 분기처리 필요.
  // const redirectUrl = import.meta.env.VITE_REACT_APP_KAKAO_LOGOUT_URL_LOCAL;
  // const clientId = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;

  /** active style 처리 */
  const activeStyle = (url: string) => {
    if (url === window.location.pathname) {
      return "text-blue-700";
    } else return "text-gray-900";
  };

  const logoutHandler = (e: any) => {
    e.preventDefault();
    // 요청을 보내서 로그아웃 url을 전달받는다. //백단은 로그아웃 url을 주기 전에 디비에서 토큰을 삭제한다.

    ApiClient.getInstance().get(
      "/sign/out",
      {},
      (data) => {
        const url = data.data;

        localStorage.removeItem("atk");
        localStorage.removeItem("rtk");
        localStorage.removeItem("nick");
        localStorage.removeItem("referer");

        window.location.href = url;
      },
      (data) => {}
    );
  };

  useEffect(() => {
    ApiClient.getInstance().get(
      "/login/check",
      {},
      () => setIsLogined(true),
      () => setIsLogined(false)
    );
  }, []);
  return (
    <nav className="flex justify-between p-4 border-b">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src={`${AssetsRoot}/images/logo_white.jpeg`}
          className="h-10"
          alt="Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          jinvicky
        </span>
      </a>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2">
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
                className={`block py-2 px3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activeStyle(
                  "/posts"
                )}`}
              >
                <Locale k="illust" />
              </a>
            </li>
            <li>
              <a
                href="/commissions"
                className={`block py-2 px3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activeStyle(
                  "/commissions"
                )}`}
              >
                <Locale k="cms_apply" />
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activeStyle(
                  "/reviews"
                )}`}
              >
                <Locale k="review" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-2 px-4">
        <ul className="flex ml-auto">
          {isLogined ? (
            <>
              <li>
                <a href="/mypage/cms">안녕하세요! {getNick()}님</a>
              </li>
              <li className="ml-5">
                <a href="/mypage/cms">
                  <Locale k="mypage" />
                </a>
              </li>
              <li className="ml-5">
                <a href="/sign/out">
                  <Locale k="logout" />
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
                <Locale k="login" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
