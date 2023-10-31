import AtomButton, { ButtonProps as AtomButtonProps } from "@neos-components/button";

import React from "react";
import { buttonStyle } from "./Button.css";

export interface ButtonProps extends AtomButtonProps {
  theme: keyof typeof buttonStyle;
}

const Button: React.FC<ButtonProps> = ({ theme, href, ...props }) => {
  const className = buttonStyle[theme];
  return (
    <AtomButton className={className} href={href} {...props}>
      Button
    </AtomButton>
  );
};

export default Button;
