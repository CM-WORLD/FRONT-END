import SideNav from "../sideNav";
import { ReactNode } from "react";

import "./style.scss";

interface ContentProps {
  title: string;
  content: ReactNode;
  btnLink?: string;
  btnTxt?: string;
}

const MyCommonContent = (props: ContentProps) => {
  return (
    <>
      <div className="my-content">
        <div className="lg:w-2/6">
        <SideNav />
        </div>
        <div className="base-content">
          <div className="flex justify-between align-center mt-1 mb-10">
            <div className="font-bold text-lg">{props.title}</div>
            {props.btnLink && (
              <a href={props.btnLink} className="font-bold text-white bg-rose-500 py-2 px-3 rounded">
                {props.btnTxt ? props.btnTxt : "신규 바로 가기"}
              </a>
            )}
          </div>

          {props.content}
        </div>
      </div>
    </>
  );
};

export default MyCommonContent;
