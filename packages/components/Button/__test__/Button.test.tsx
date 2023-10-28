import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "..";

describe("Button component", () => {
  test("fires onClick event", async () => {
    const handleClick = jest.fn();
    const content = "Click me";
    render(<Button onClick={handleClick}>{content}</Button>);

    const buttonElement = screen.getByRole("button");

    await userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
