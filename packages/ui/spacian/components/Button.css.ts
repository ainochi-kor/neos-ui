import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { buttonStyles } from "../styles/style.css";

export const buttonBasicStyle = recipe({
  base: {
    display: "block",
    borderRadius: "8px",
    minWidth: "64px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    ":active": {
      backgroundColor: "rgba(0, 0, 0, 0.06)",
    },
  },
  variants: {
    fullWidth: {
      true: { width: "100%" },
    },
  },
});

export const anchorBasicStyle = recipe({
  base: {
    display: "inline-flex",
    textAlign: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    position: "relative",
    verticalAlign: "middle",
    userSelect: "none",
    textDecoration: "none",
    margin: 0,
  },
  variants: {
    fullWidth: {
      true: { width: "100%" },
    },
  },
});

export const buttonSmallSize = style([
  {
    height: "32px",
    padding: "8px 16px",
    fontSize: "14px",
  },
]);

export const buttonBaseSize = style([
  {
    height: "36px",
    padding: "8px 20px",
    fontSize: "16px",
  },
]);

export const fullWidthStyle = style({
  width: "100%",
});

export const buttonSize = styleVariants({
  small: [buttonSmallSize],
  base: [buttonBaseSize],
});

export const buttonTheme = styleVariants({
  ...(Object.keys(buttonStyles).reduce((theme, key) => {
    return {
      ...theme,
      [key]: [buttonStyles[key]],
    };
  }, {}) as Record<string, [string]>),
});
