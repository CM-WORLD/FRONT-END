import SideNav from "../sideNav";
import { ReactNode } from "react";

import "./style.scss";
import Button from "../../../components/button";

interface ContentProps {
  title?: string;
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
          {props.title && (
            <div className="flex justify-between align-center mt-5 mb-12">
              <div className="text-3xl font-bold">{props.title}</div>
              {props.btnLink && (
                <Button
                  value={props.btnTxt ? props.btnTxt : "신규 바로 가기"}
                  color="Rose"
                  onClick={() => {
                    if (props.btnLink) window.location.href = props.btnLink;
                  }}
                />
              )}
            </div>
          )}

          {props.content}
        </div>
      </div>
    </>
  );
};

export default MyCommonContent;
