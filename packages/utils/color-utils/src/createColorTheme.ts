import { ColorSystem, createColorSystem } from "./createColorSystem";

export const createColorTheme = (
  colorSystem: Record<string, string>,
): Record<string, ColorSystem> => {
  return Object.keys(colorSystem).reduce((acc, key) => {
    return {
      ...acc,
      [key]: createColorSystem(colorSystem[key]),
    };
  }, {});
};
