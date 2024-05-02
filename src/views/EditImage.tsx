import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { SketchPicker } from "react-color";

import DraggableNickName from "@components/NicknameEditor";
import ColorPicker from "@components/ColorPicker";

const imgStyle = {
  width: "auto",
  maxWidth: "500px",
  height: "auto",
};

const canvasStyle = {
  width: "500px",
  height: "500px",
  minHeight: "700px",
};

function TextSticker() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [font, setFont] = useState<string>("Arial");
  const [fontList, setFontList] = useState<string[]>([]);
  const canvasRef = React.useRef<HTMLDivElement>(null);
  const [fontColor, setFontColor] = useState<string>("#000000");

  const initFontList = async () => {
    await document.fonts.ready;
    const fontArray = [];
    // document.fonts.forEach((font) => {
    //   console.log(font);
    //   fontArray.push(font.family);
    // });
    /** 추후 개선해보고 싶다. 현재 font-family들이 동일해서 생기는 문제 */
    setFontList(fontArray);
  };

  useEffect(() => {
    initFontList();
  }, []);

  const onLoadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        console.log(img.width, img.height);
      };
      img.src = e.target?.result as string;
    };
    setImgSrc(URL.createObjectURL(file));
  };

  const onSaveImage = () => {
    if (!canvasRef.current) return;
    html2canvas(canvasRef.current).then((canvas) => {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "image.png";
      a.click();
    });
  };

  const onAddText = () => {
    const input = document.getElementById("textForm") as HTMLTextAreaElement;
    setNickname(input.value);
  };

  const onFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!nickname) return;
    const font = event.target.value;
    const nicknameElement = document.getElementById(
      "nickname"
    ) as HTMLDivElement;
    if (nicknameElement) {
      nicknameElement.style.fontFamily = font;
      setFont(font);
    }
  };

  const onChangeFontColor = (color) => {
    setFontColor(color.hex);
  };

  return (
    <>
      <div>
        <SketchPicker color={fontColor} onChangeComplete={onChangeFontColor} />
        <ColorPicker />
        <div style={{ color: fontColor }}>this is jinvicky</div>
        <select onChange={onFontChange}>
          {fontList.map((font) => (
            <option key={font}>{font}</option>
          ))}
        </select>
        <textarea id="textForm" placeholder="닉네임을 입력해 주세요" rows={2} />
        <button onClick={onAddText}>입력 완료</button>
        <input type="file" onChange={onLoadImage} />
        <button className="bg-blue-400" onClick={onSaveImage}>
          저장
        </button>
        <div
          id="canvas"
          style={{ position: "relative", ...canvasStyle }}
          ref={canvasRef}
        >
          {nickname && <DraggableNickName text={nickname} color={fontColor} />}
          {imgSrc && (
            <img
              id="img"
              src={imgSrc}
              alt="img"
              style={{ ...imgStyle, userSelect: "none" }}
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default TextSticker;
