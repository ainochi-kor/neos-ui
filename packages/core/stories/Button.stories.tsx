import Button, { ButtonProps } from "../components/Button";
import type { Meta } from "@storybook/react";
import React from "react";
import { useState } from "react";

export default {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

const defaultProps = {
  children: "Button",
  disabled: false,
  theme: "primary",
};

const StateTemplate = (args: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button {...args} onClick={handleClick}>
      {isOpen ? "Close" : "Open"}
    </Button>
  );
};

export const Default = {
  args: { ...defaultProps },
};

export const WithState = {
  render: StateTemplate,

  args: {
    ...defaultProps,
  },
};
