import Input from "../input";
interface InputLineProps {
  label: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputLine = (props: InputLineProps) => {
  return (
    <>
      <div className="p-2 flex">
        <label htmlFor="" className="mr-5 text-dark">
          {props.label}{" "}
          {props.required && <span className="text-red-500">*</span>}
        </label>
        <Input
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </>
  );
};
export default InputLine;

InputLine.defaultProps = {
  required: false,
};
