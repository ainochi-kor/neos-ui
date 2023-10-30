import { style } from "@vanilla-extract/css";
import colorSystem from "@neos-ui/color-system";

const { defaultColorTheme: colors } = colorSystem;

export const bgPrimaryStyle = style({
  backgroundColor: colors.green[400],
});

export const bgBlueStyle = style({
  backgroundColor: colors.blue[400],
});

export const bgGrayStyle = style({
  backgroundColor: colors.blue[400],
});

export const bgRedStyle = style({
  backgroundColor: colors.red[400],
});

export const bgYellowStyle = style({
  backgroundColor: colors.yellow[400],
});
