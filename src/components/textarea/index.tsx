interface TextAreaProps {
  value: string;
  onChange: any;
  placeholder?: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white resize-none focus:outline-none"
      placeholder={
        props.placeholder ? props.placeholder : "내용을 입력해 주세요"
      }
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      rows={10}
     />
  );
};
export default TextArea;
