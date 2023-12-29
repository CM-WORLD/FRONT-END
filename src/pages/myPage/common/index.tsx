import SideNav from "../sideNav";
import { ReactNode } from "react";

import "./style.scss";

interface ContentProps {
  title: string;
  content: ReactNode;
}

const MyCommonContent = (props: ContentProps) => {
  return (
    <>
      <div className="my-content">
        <SideNav />
        <div className="base-content">
          <h1 className="">{props.title}</h1>

          {props.content}
        </div>
      </div>
    </>
  );
};

export default MyCommonContent;
