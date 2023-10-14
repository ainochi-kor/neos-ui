import { createColorSystem } from "./createColorSystem";

export const createColorTheme = (colorSystem: { [key: string]: string }) => {
  return Object.keys(colorSystem).map((key) => {
    return {
      [key]: createColorSystem(colorSystem[key]),
    };
  });
};
