import { ReactNode } from "react";
import Locale from "../../components/locale";
import Button from "../button";

interface ModalProps {
  title?: JSX.Element;
  display: boolean;
  content: ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
}

const Modal = (props: ModalProps) => {
  if (!props.display) return <></>;
  return (
    <>
      <div
        id="default-modal"
        aria-hidden="true"
        className="bg-gray-900 bg-opacity-50 fixed inset-0 z-50 flex justify-center"
      >
        <div className="relative p-4 max-h-2xl flex m-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-dark dark:text-white">
                {props.title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={props.onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 overflow-y-scroll max-h-80">
              {props.content}
            </div>
            {/* Modal footer */}
            <div className="flex justify-center items-center gap-4 p-4 md:p-5 border-t  border-gray-200 rounded-b dark:border-gray-600">
              <Button color="Primary" onClick={props.onSubmit}>
                <Locale k="confirm" />
              </Button>
              <Button
                color="White"
                textColor="Dark"
                onClick={props.onClose}
                borderless={false}
              >
                <Locale k="cancel" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
