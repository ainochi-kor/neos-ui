export const expandShortHexColor = (code: string): string => {
  if (code.length === 4 && code.startsWith("#")) {
    return `#${code[1]}${code[1]}${code[2]}${code[2]}${code[3]}${code[3]}`;
  }
  return code;
};
