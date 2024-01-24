import SideNav from "../sideNav";

import Button from "../../../components/button";

interface ContentProps {
  title?: JSX.Element; // Update the type of the title prop
  content: JSX.Element;
  btnLink?: string;
  btnTxt?: JSX.Element;
}

const MyCommonContent = (props: ContentProps) => {
  return (
    <>
      <div className="flex">
        <div className="">
          <SideNav />
        </div>
        <div className="m-5 w-full">
          {props.title && (
            <div className="flex justify-between align-center mt-5 mb-12">
              <div className="text-3xl font-bold">{props.title}</div>
              {props.btnLink && (
                <Button
                  color="Primary"
                  onClick={() => {
                    if (props.btnLink) window.location.href = props.btnLink;
                  }}
                 >{props.btnTxt}</Button>
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
