import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import ColorPicker from "@components/ColorPicker";

interface EditorFormProps {
  addText: () => void; // 이미지에 텍스트 붙여넣기, 더하기
  changeFontColor: () => void;
  saveImage: () => void;
  previewImage: () => void;
}

interface Font {
  color: string;
  size: string;
  family: string;
}

function EditorForm(props: Readonly<EditorFormProps>) {
  const { addText, changeFontColor, saveImage, previewImage } = props;

  const [font, setFont] = useState<Font>({ color: "", size: "", family: "" });
  const [fontList, setFontList] = useState<string[]>([]);

  const onFontChange = () => {};

  useEffect(() => {}, []);

  const fontOptions = fontList.map((font) => <option key={font}>{font}</option>);

  return (
    <>
      <SketchPicker color={font.color} onChangeComplete={changeFontColor} />
      <ColorPicker />
      {/* <div style={{ color: font.color }}>this is jinvicky</div> */}
      <select onChange={onFontChange}>
        {fontOptions}
      </select>
      <input id="textForm" placeholder="닉네임을 입력해 주세요" />
      <button onClick={addText}>입력 완료</button>
      <input type="file" onChange={previewImage} />
      <button className="bg-blue-400" onClick={saveImage}>
        저장
      </button>
    </>
  );
}

export default EditorForm;
