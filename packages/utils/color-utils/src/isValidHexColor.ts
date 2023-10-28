export const isValidHexColor = (code: string): boolean => {
  const hexPattern = /^#(?<temp1>[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexPattern.test(code);
};
