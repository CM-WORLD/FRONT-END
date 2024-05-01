import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";

import DraggableNickName from "@components/DraggableNickName";

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
    // 캔버스 생성
    // const canvas = document.createElement("canvas");
    // const ctx = canvas.getContext("2d");
    // if (!ctx) return;

    // // 이미지와 닉네임 요소 가져오기
    // const img = document.getElementById("img") as HTMLImageElement;
    // const nicknameElement = document.getElementById(
    //   "nickname"
    // ) as HTMLDivElement;

    // // 캔버스 크기 설정
    // canvas.width = img.width; // 이미지의 너비
    // canvas.height = img.height; // 이미지의 높이 + 닉네임의 높이

    // // 이미지 그리기
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(img, 0, 0, canvas.width, img.height);

    // // 닉네임 그리기
    // ctx.font = "30px" + font;
    // ctx.fillStyle = "white";
    // ctx.fillText(nicknameElement.innerText, 10, 10); // 이미지 아래에 위치

    // // 이미지로 저장
    // const a = document.createElement("a");
    // a.href = canvas.toDataURL("image/png");
    // a.download = "image.png";
    // a.click();

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

  return (
    <>
      <div>
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
