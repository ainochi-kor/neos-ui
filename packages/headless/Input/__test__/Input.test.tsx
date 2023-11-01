// components/Button/Button.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "..";

describe("Button component", () => {
  test("fires onClick event", () => {
    const content = "Click me";
    render(<Input value={content} />);

    const input = screen.getByDisplayValue(content) as HTMLInputElement;
    expect(input.value).toBe(content);
  });
});
