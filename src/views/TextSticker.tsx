import React, { useEffect, useState } from "react";

import { initFontList } from "@utils/textSticker";
import DraggableNickName from "@components/DraggableNickName";

const imgStyle = {
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  maxHeight: "800px",
};

const canvasStyle = {
  width: "500px",
  height: "500px",
  minHeight: "900px",
};

function TextSticker() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [fontList, setFontList] = useState<string[]>([]);

  const initFontList = async () => {
    await document.fonts.ready;
    const fontArray = [];
    document.fonts.forEach((font) => {
      fontArray.push(font.family);
    });
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
    }
  };

  return (
    <>
      <div>
        <h1>Text Sticker</h1>
        <p>Text Sticker is a sticker that contains text.</p>
      </div>
      <div>
        <select onChange={onFontChange}>
          {fontList.map((font) => (
            <option key={font}>{font}</option>
          ))}
        </select>
        <textarea id="textForm" placeholder="닉네임을 입력해 주세요" rows={2} />
        <button onClick={onAddText}>입력 완료</button>
        <input type="file" onChange={onLoadImage} />
        <div id="canvas" style={{ position: "relative", ...canvasStyle }}>
          {nickname && <DraggableNickName text={nickname} />}
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
