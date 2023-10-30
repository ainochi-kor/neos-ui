import Input from "@neos-components/input";
import type { Meta } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} satisfies Meta<typeof Input>;

const defaultProps = {
  label: "Email",
};

export const Default = {
  args: { ...defaultProps },
};

export const Required = {
  args: { ...defaultProps, isRequired: true },
};

export const Disabled = {
  args: { ...defaultProps, disabled: true, value: "nochi@email.com" },
};

export const Password = {
  args: {
    ...defaultProps,
    type: "password",
    placeholder: "Enter your password",
  },
};

export const FullWidth = {
  args: {
    ...defaultProps,
    className: "w-full",
  },
};
