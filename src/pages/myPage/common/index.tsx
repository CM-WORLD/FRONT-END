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
        <SideNav />
        <div className="base-content">
          <div className="my-header">
            <h1 className="">{props.title}</h1>
            {props.btnLink && (
              <a href={props.btnLink}>
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
