import { style } from "@vanilla-extract/css";
import colorSystem from "@neos-ui/color-system";

const { defaultColorTheme: colors } = colorSystem;

type ButtonStyles = Record<
  string,
  {
    backgroundColor: string;
    color: string;
    ":hover": {
      backgroundColor: string;
    };
    ":active": {
      backgroundColor: string;
    };
  }
>;

export const buttonStyles: ButtonStyles = Object.keys(colors).reduce((styles, key) => {
  return {
    ...styles,
    [key]: {
      backgroundColor: colors[key][500],
      color: "#FFFFFF",
      ":hover": {
        backgroundColor: colors[key][400],
      },
      ":active": {
        backgroundColor: colors[key][300],
      },
    },
  };
}, {});
