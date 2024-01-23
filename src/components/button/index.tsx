import {  MouseEventHandler } from "react";
import { buildClass, getColorByType } from "../../defines/twColors";

// export const Button = function <T extends string | number>({
//   type,
//   color,
//   size,
//   radius,
//   value,
//   onClick,
//   className,
//   disabled,
//   borderless,
//   style,

//   children,
// }: RenderableProps<ButtonProps<T>>) {
//   return createElement("button", {
//     className: BuildClass(
//       "button",
//       `button-${color}`,
//       `button-${size}`,
//       `button-${radius}`,
//       borderless && "borderless",
//       className),
//     type,
//     disabled: disabled,
//     style: style,
//     value,
//     onClick: onClick,
//   }, children);
// };

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
          getColorByType(props.textColor, "txt"),
          getRoundType(props.radius),
          props.disabled ? "cursor-not-allowed" : "",
          "text-white font-bold py-2 px-4",
          props.borderless ? "" : "border border-gray-300",
          props.className ? props.className : "",
          "text-base focus:ring-4 focus:outline-none focus:ring-blue-300" // 기본 
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
