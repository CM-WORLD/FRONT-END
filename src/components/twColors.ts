type ClassType = {
  [key: string]: string;
};

export const BgColors: ClassType ={
  Rose: "bg-rose-500",
  Blue: "bg-blue-500",
  Primary: "bg-primary"
}

export const BgHoverColors: ClassType ={
  Rose: "hover:bg-rose-700",
  Blue: "hover:bg-blue-700",
};

export const TxtColors: ClassType ={
  Rose: "text-rose-500",
  Blue: "text-blue-500",
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
