import { ColorSystem, createColorSystem } from "./createColorSystem";

export const createColorTheme = (
  colorSystem: Record<string, string>,
): Record<string, ColorSystem> => {
  return Object.keys(colorSystem).reduce((theme, key) => {
    return {
      ...theme,
      [key]: createColorSystem(colorSystem[key]),
    };
  }, {});
};
