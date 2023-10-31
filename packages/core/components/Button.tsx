import AtomButton, { ButtonProps as AtomButtonProps } from "@neos-components/button";

import React from "react";
import { anchorBasicStyle, buttonBasicStyle, buttonSize, buttonTheme } from "./Button.css";
import clsx from "clsx";

export interface ButtonProps extends AtomButtonProps {
  theme: keyof typeof buttonTheme;
  size: keyof typeof buttonSize;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ theme, size = "base", fullWidth, href, ...props }) => {
  const themeClass = buttonTheme[theme];
  const sizeClass = buttonSize[size];
  const styleClass = href ? anchorBasicStyle : buttonBasicStyle;

  return (
    <AtomButton
      className={clsx(
        styleClass({
          fullWidth,
        }),
        themeClass,
        sizeClass,
      )}
      href={href}
      {...props}
    >
      Button
    </AtomButton>
  );
};

export default Button;
