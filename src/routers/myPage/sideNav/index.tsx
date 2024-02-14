import { useEffect } from "react";
import Locale from "../../../components/locale";

const SideNav = () => {
  useEffect(() => {
    const currentPath = window.location.pathname;

    // currentPath와 href가 동일하면 active 클래스 추가
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("bg-gray-50");
        link.classList.add("text-primary");
        link.classList.add("font-bold")
        link.classList.add("border-l-4");
        link.classList.add("border-primary");
      }
    });
  }, []);
  return (
    <>
      <aside className="sticky sticky-top md:block m-5 py-4">
        <div className="font-semibold text-center">
          <Locale k="mypage" />
        </div>
        <div className="flex flex-col items mt-3">
          <a
            href="/myPage/inquiry"
            className="opacity-90 hover:bg-gray-50 p-3"
          >
          <Locale k="inquiry" />
          </a>
          <a
            href="/myPage/cms"
            className="opacity-90 hover:bg-gray-50 p-3"
            >
          <Locale k="cms_apply_history" />
          </a>
          <a
            href="/myPage/reviews"
            className="opacity-90 hover:bg-gray-50 p-3"
          >
            <Locale k="my_review" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
