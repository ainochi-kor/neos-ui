import type {PropsWithChildren, MouseEvent} from "react";
import React from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // 여기서 onClick prop을 정의합니다.
  // 필요한 경우 여기에 다른 props들을 추가할 수 있습니다.
}>;

export const Button: React.FC<ButtonProps> = ({children, onClick, ...props}) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};
