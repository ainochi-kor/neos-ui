import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
// import Link from "next/link";

interface ReactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonProps extends ReactButtonProps, PropsWithChildren {
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
  return href ? <a href={href}>{children}</a> : <button {...props}>{children}</button>;
};

export default Button;
