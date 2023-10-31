import Button from "../components/Button";
import type { Meta } from "@storybook/react";
import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import colorSystem from "@neos-ui/color-system";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "버튼 컴포넌트", // 컴포넌트 부제목
  },
  argTypes: {
    size: {
      type: "string",
      defaultValue: "base",
      description: "버튼의 크기를 설정합니다.",
      name: "size",
    },
    theme: {
      type: "string",
      defaultValue: "green",
      description: "버튼의 테마를 설정합니다.",
      name: "theme",
    },
    disabled: {
      defaultValue: false,
      description: "버튼의 비활성화 여부를 설정합니다.",
      name: "disabled",
      type: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

/**
 * 버튼은 동작(또는 일련의 동작)을 의미합니다. 버튼을 클릭하면 해당 비즈니스 로직이 트리거됩니다.
 *
 * 아직 예시 페이지입니다.
 */

export const Basics = () => {
  const label = text("label", "Button");
  const props = {
    disabled: boolean("disabled", false),
    size: select("size", ["small", "base"], "base"),
    theme: select("theme", [...Object.keys(colorSystem.defaultColorSystem)], "green"),
  };

  return (
    <Button {...props} onClick={action("onClick")}>
      {label}
    </Button>
  );
};
