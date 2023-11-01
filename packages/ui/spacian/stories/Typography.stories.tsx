import type { Meta } from "@storybook/react";

import Typography, { TypographyProps } from "@neos-headless/typography";
import React from "react";

export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: {
        type: "select",
      },
    },
    align: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
    component: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Typography>;

export const Default = {
  render: () => <Typography>Default</Typography>,
};
