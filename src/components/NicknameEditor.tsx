import React, { useEffect, useRef, useState } from "react";

interface DraggableNickNameProps {
  text: string;
  color: string;
}

function NicknameEditor(props: DraggableNickNameProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const nicknameRef = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (nicknameRef.current?.contains(e.target as Node)) {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    };

    const handleArrowKeys = (event) => {
      if (isFocused) {
        switch (event.key) {
          case "ArrowUp":
            setPosition((prevPosition) => ({
              ...prevPosition,
              y: prevPosition.y - 10,
            }));
            break;
          case "ArrowDown":
            setPosition((prevPosition) => ({
              ...prevPosition,
              y: prevPosition.y + 10,
            }));
            break;
          case "ArrowLeft":
            setPosition((prevPosition) => ({
              ...prevPosition,
              x: prevPosition.x - 10,
            }));
            break;
          case "ArrowRight":
            setPosition((prevPosition) => ({
              ...prevPosition,
              x: prevPosition.x + 10,
            }));
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleArrowKeys);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleArrowKeys);
    };
  }, [isFocused]);

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
    <>
      <div
        ref={nicknameRef}
        style={{ position: "relative", outline: "none" }}
        tabIndex={0} // 키보드 이벤트를 위해 포커스 설정
      >
        <div
          style={{
            position: "absolute",
            border: isFocused ? "1px solid red" : "none",
            left: position.x,
            top: position.y,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onFocus={() => setIsFocused(true)} // 포커스 이벤트 처리
          onBlur={() => setIsFocused(false)} // 포커스 이벤트 처리
        >
          {isFocused && (
            <div style={{ position: "absolute", top: -30 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increaseFontSize();
                }}
              >
                +
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseFontSize();
                }}
              >
                -
              </button>
            </div>
          )}
          <div
            id="nickname"
            style={{
              zIndex: 100,
              padding: "10px",
              color: props.color,
            }}
          >
            {props.text}
          </div>
        </div>
      </div>
    </>
  );
}

export default NicknameEditor;
