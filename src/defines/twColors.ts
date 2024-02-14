type ClassType = {
  [key: string]: string;
};

export const BgColors: ClassType ={
  Rose: "bg-rose-500",
  Blue: "bg-blue-500",
  Primary: "bg-primary",
  White: "bg-white", 
  Green: "bg-green-500",
  LightGray: "bg-gray-200",
  Gray: "bg-gray-500", 
  Emerald: "bg-emerald-400",
}

export const BgHoverColors: ClassType ={
  Rose: "hover:bg-rose-700",
  Blue: "hover:bg-blue-700",
  White: "hover:bg-gray-100", 
  Green: "hover:bg-green-700",
  LightGray: "hover:bg-gray-300",
  Gray: "hover:bg-gray-700",
  Emerald: "hover:bg-emerald-500",

};

export const TxtColors: ClassType ={
  Rose: "text-rose-500",
  Blue: "text-blue-500",
  Dark: "text-gray-700",
  White: "text-white",
}

export const getColorByType = (color: keyof ClassType, type: string): string  => {
  switch(type){
    case "bg":
      return BgColors[color];
    case "bgHover":
      return BgHoverColors[color];
    case "txt" :
      if (color === null || color === undefined) return "text-white";
      return TxtColors[color];
    default:
      return BgColors[color];
  }
}

export const buildClass = (...args: string[]) => {
  const classes = args.filter(Boolean); 
  return classes.join(" ");
}


/** 페이징, 버튼 상태에 따른 스타일 */
export const getStyleByStatus = (disabled: string) => {
  const disabledStyle = "pointer-events-none cursor-not-allowed bg-gray-100 text-gray-300";
  const activeStyle = "bg-white hover:bg-gray-100 text-gray-500 hover:text-gray-600 ";

  if(disabled === "disabled") return disabledStyle;
  return activeStyle;
}
