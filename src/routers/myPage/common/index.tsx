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
      <div className="flex min-h-screen">
        <div className="w-1/3">
          <SideNav />
        </div>
        <div className="mx-10 my-5 w-full min-h-screen">
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
