// components/Button/Button.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Typography } from "..";

describe("Typography component", () => {
  test("Typography render test", () => {
    const content = "This is Typography";
    render(<Typography>{content}</Typography>);

    const typographyElement = screen.getByText(content);
    expect(typographyElement).toBeTruthy();
  });
});
