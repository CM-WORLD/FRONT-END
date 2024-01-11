type ClassType = {
  [key: string]: string;
};

export const BgColors: ClassType ={
  rose: "bg-rose-500",
  blue: "bg-blue-500",
}

export const BgHoverColors: ClassType ={
  rose: "hover:bg-rose-700",
  blue: "hover:bg-blue-700",
};

export const TxtColors: ClassType ={
  rose: "text-rose-500",
  blue: "text-blue-500",
}

export const getColorByType = (color: keyof ClassType, type: string): string  => {
  switch(type){
    case "bg":
      return BgColors[color];
    case "bgHover":
      return BgHoverColors[color];
    case "txt" :
      return TxtColors[color];
    default:
      return BgColors[color];
  }
}

export const buildClass = (...args: string[]) => {
  const classes = args.filter(Boolean); 
  return classes.join(" ");
}
