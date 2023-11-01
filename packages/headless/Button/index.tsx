import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
// import Link from "next/link";

type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ReactAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAndAnchorProps = ReactButtonProps & ReactAnchorProps;

export interface ButtonProps extends ButtonAndAnchorProps, PropsWithChildren {
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
  return href ? (
    <a href={href} {...(props as ReactAnchorProps)}>
      {children}
    </a>
  ) : (
    <button {...props}>{children}</button>
  );
};

export default Button;
