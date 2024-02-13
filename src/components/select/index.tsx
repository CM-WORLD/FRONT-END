import { getLocaleToString } from "../locale";

interface Option {
  value: string;
  locale: string;
}

interface SelectProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Select = (props: SelectProps) => {

  const optionList = props.options.map((option, idx) => (
    <option
      key={idx}
      value={option.value}
      selected={props.selectedValue ? (option.value === props.selectedValue) : idx === 0}
    >
      {getLocaleToString(option.locale)}
    </option>
  ));

  return (
    <>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
        onChange={(e) => props.onChange(e.target.value)}
      >
        {optionList}
      </select>
    </>
  );
};

export default Select;
