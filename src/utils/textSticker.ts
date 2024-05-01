export const initFontList = async (
  setFontList: React.Dispatch<React.SetStateAction<string[]>>
) => {
  await document.fonts.ready;
  const fontArray = [];
  document.fonts.forEach((font) => {
    fontArray.push(font.family);
  });
  setFontList(fontArray);
};
