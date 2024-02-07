interface SelectProps {
  label: string;
  options: [{ locale: string; value: string }];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Select = (props: SelectProps) => {
  const optionList = props.options.map((option, idx) => (
    <option
      key={idx}
      value={option.value}
      selected={option.value === props.selectedValue}
    >
      {option.locale}
    </option>
  ));

  return (
    <>
      {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label> */}
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option selected>Choose a country</option>
        {optionList}
      </select>
    </>
  );
};

export default Select;
