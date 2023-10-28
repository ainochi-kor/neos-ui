// components/Button/Button.test.js
import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {Button} from "../src/Button";

describe("Button component", () => {
  test("fires onClick event", () => {
    const handleClick = jest.fn();
    const content = "Click me";
    render(<Button onClick={handleClick}>{content}</Button>);

    // 버튼을 클릭하고, 클릭 핸들러 호출 여부를 확인합니다.
    const buttonElement = screen.getByText(content);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
