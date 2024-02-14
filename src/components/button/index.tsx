import {  MouseEventHandler } from "react";
import { buildClass, getColorByType } from "../../defines/twColors";

export interface ButtonProps {
  type?: "button" | "submit";
  size?:
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "fixed"
  | "alert"
  | "popup"
  | "icon"
  | "none";
  color: string;
  textColor?: string;
  borderless?: boolean;
  radius: "round" | "square" | "pill" | "circle";
  disabled?: boolean;
  className?: string;
  children?: JSX.Element;
  onClick?: MouseEventHandler;
}

export const Button = (props: ButtonProps) => {
  const getRoundType = (radius: string) => {
    switch (radius) {
      case "round":
        return "rounded";
      case "square":
        return "rounded-none";
      case "pill":
        return "rounded-3xl";
      case "circle":
        return "rounded-full";
      default:
        return "rounded";
    }
  }

  return (
    <button
      className={
        buildClass(
          getColorByType(props.color, "bg"),
          getColorByType(props.color, "bgHover"),
          getRoundType(props.radius),
          getColorByType(props.textColor, "txt"),
          props.disabled ? "cursor-not-allowed" : "",
          "font-bold py-2 px-4",
          props.borderless ? "" : "border border-gray-300",
          props.className ? props.className : "",
          "text-base focus:outline-none" // 기본 
        )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  size: "sm",
  color: "blue",
  radius: "round",
  className: "",
  borderless: true,
};
export default Button;
