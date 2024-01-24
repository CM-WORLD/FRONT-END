import { buildClass } from "../../defines/twColors";
import { getLocaleToString } from "../locale";

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (e) => void;
  className?: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className={buildClass(
        "border border-gray-400 rounded py-2 px-2 resize-none text-base min-h-40",
        props.className
      )}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextArea;
