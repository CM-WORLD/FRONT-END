import { ReactNode } from "react";
import "./style.scss";

interface ModalProps {
  title?: string;
  content: ReactNode;
  display: boolean;
}

const Modal = (props: ModalProps) => {
  if (!props.display) return <></>;
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <h2 className="title">{props.title}</h2>
          <div className="content">{props.content}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
