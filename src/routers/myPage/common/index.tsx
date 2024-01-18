import SideNav from "../sideNav";
import { ReactNode } from "react";

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
      <div className="flex">
        <div className="">
          <SideNav />
        </div>
        <div className="p-3">
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
