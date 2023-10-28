import React, { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";
// import {typographyStyle} from "../styles/typography.css";

export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>;

type OverridableProps<T extends ElementType, K = unknown> = {
  as?: T;
  // theme?: keyof typeof typographyStyle;
} & CombineElementProps<T, K>;

export type TypographyProps<T extends ElementType> = PropsWithChildren<OverridableProps<T>>;

const TargetComponent = <T extends ElementType = "span">(
  { children, as, theme, ...props }: TypographyProps<T>,
  ref: React.Ref<never>,
) => {
  const target = as ?? "span";
  const Component = target;
  const themeName = theme ? "" /*typographyStyle[theme]*/ : "";

  return (
    <Component className={themeName} ref={ref} {...props}>
      {children}
    </Component>
  );
};

const Typography = forwardRef(TargetComponent) as typeof TargetComponent;

export default Typography;
