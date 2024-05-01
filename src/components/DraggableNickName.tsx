import { useState } from "react";

interface DraggableNickNameProps {
  text: string;
}

function DraggableNickName(props: DraggableNickNameProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const increaseFontSize = () => {
    const nicknameElement = document.getElementById(
      "nickname"
    ) as HTMLDivElement;
    if (nicknameElement) {
      const fontSize = window
        .getComputedStyle(nicknameElement, null)
        .getPropertyValue("font-size");
      nicknameElement.style.fontSize = `${parseInt(fontSize) + 1}px`;
    }
  };

  const decreaseFontSize = () => {
    const nicknameElement = document.getElementById(
      "nickname"
    ) as HTMLDivElement;
    if (nicknameElement) {
      const fontSize = window
        .getComputedStyle(nicknameElement, null)
        .getPropertyValue("font-size");
      nicknameElement.style.fontSize = `${parseInt(fontSize) - 1}px`;
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button onClick={increaseFontSize}>키우자</button>
      <button onClick={decreaseFontSize}>줄이자</button>
      <div
        style={{
          zIndex: 100,
          width: "100px",
          height: "100px",
          background: "lightblue",
          padding: "10px",
        }}
      >
        <div id="nickname">{props.text}</div>
      </div>
    </div>
  );
}

export default DraggableNickName;
