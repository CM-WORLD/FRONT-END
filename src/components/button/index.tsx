import { MouseEventHandler } from "react";
import "./style.scss";

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
  color?: string;
  radius: "round" | "square" | "pill" | "circle";
  disabled?: boolean;
  value?: string | number;
  className?: string;
  onClick?: MouseEventHandler;
}

export const Button = (props: ButtonProps) => {
  return <button
        className="button"
        disabled={props.disabled}
  >
    {props.value}
  </button>;
};

Button.defaultProps = {
  type: "button",
  size: "sm",
  color: "primary",
  radius: "round",
};
export default Button;
