import { getLocaleToString } from "../locale";

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (e) => void;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="border border-gray-400 rounded py-2 px-2 resize-none text-base min-h-40"
      placeholder={getLocaleToString(props.placeholder)}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextArea;
