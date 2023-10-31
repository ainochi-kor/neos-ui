import { createDefaultColors, createColorTheme } from "@neos-utils/color-utils";

const defaultColorSystem = createDefaultColors();
const defaultColorTheme = createColorTheme(defaultColorSystem);

export default {
  defaultColorSystem,
  defaultColorTheme,
};
