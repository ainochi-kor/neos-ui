import { UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes, ReactNode } from "react";
import React from "react";

type ReactInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends ReactInputProps {
  label?: ReactNode;
  register?: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({ label, register, ...props }) => {
  return (
    <div>
      {label}
      <input {...register} {...props} />
    </div>
  );
};

export default Input;
