import { style, styleVariants } from "@vanilla-extract/css";
import {
  bgBlueStyle,
  bgGrayStyle,
  bgPrimaryStyle,
  bgRedStyle,
  bgYellowStyle,
} from "../styles/style.css";
import colorsSystem from "@neos-ui/color-system";

const { defaultColorSystem: colors } = colorsSystem;

export const buttonRadiusStyle = style({
  borderRadius: "8px",
});

export const buttonSmallStyle = style([
  buttonRadiusStyle,
  {
    padding: "8px 12px",
  },
]);

export const buttonBaseStyle = style([
  buttonRadiusStyle,
  {
    padding: "8px 20px",
  },
]);

export const bgPrimarButtonStyle = style([
  bgPrimaryStyle,
  {
    ":hover": {
      backgroundColor: colors.green[300],
    },
    ":active": {
      backgroundColor: colors.green[500],
    },
  },
]);

export const bgBlueButtonStyle = style([
  bgBlueStyle,
  {
    ":hover": {
      backgroundColor: colors.blue[300],
    },
    ":active": {
      backgroundColor: colors.blue[500],
    },
  },
]);

export const bgGrayButtonStyle = style([
  bgGrayStyle,
  {
    ":hover": {
      backgroundColor: colors.gray[300],
    },
    ":active": {
      backgroundColor: colors.gray[500],
    },
  },
]);

export const bgRedButtonStyle = style([
  bgRedStyle,
  {
    ":hover": {
      backgroundColor: colors.red[300],
    },
    ":active": {
      backgroundColor: colors.red[500],
    },
  },
]);

export const bgYellowButtonStyle = style([
  bgYellowStyle,
  {
    ":hover": {
      backgroundColor: colors.yellow[300],
    },
    ":active": {
      backgroundColor: colors.yellow[500],
    },
  },
]);

export const fullWidthStyle = style({
  width: "100%",
});

const basic = {
  primary: [buttonBaseStyle, bgPrimarButtonStyle],
  blue: [buttonBaseStyle, bgBlueButtonStyle],
  gray: [buttonBaseStyle, bgGrayButtonStyle],
  red: [buttonBaseStyle, bgRedButtonStyle],
  yellow: [buttonBaseStyle, bgYellowButtonStyle],
};

export const buttonStyle = styleVariants({
  ...basic,
  "widthFull primary": [...basic.primary, fullWidthStyle],
  "widthFull blue": [...basic.blue, fullWidthStyle],
  "widthFull gray": [...basic.gray, fullWidthStyle],
  "widthFull red": [...basic.red, fullWidthStyle],
  "widthFull yellow": [...basic.yellow, fullWidthStyle],
});
