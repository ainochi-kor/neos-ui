import React, { forwardRef } from "react";
import type { ElementType, PropsWithChildren } from "react";
import type { CombineElementProps } from "@neos-headless/types";

export type OverridableProps<T extends ElementType, K = unknown> = {
  as?: T;
} & CombineElementProps<T, K>;

export type TypographyProps<T extends ElementType> = PropsWithChildren<OverridableProps<T>>;

const TargetComponent = <T extends ElementType = "span">(
  { children, as, theme, ...props }: TypographyProps<T>,
  ref: React.Ref<never>,
) => {
  const target = as ?? "span";
  const Component = target;

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};

const Typography = forwardRef(TargetComponent) as typeof TargetComponent;

export default Typography;
