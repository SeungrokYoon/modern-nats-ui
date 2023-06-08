import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./index";

it("shows Welcome message.", () => {
  render(<HomePage />);
  const element = screen.getByRole("heading", {
    name: "Welcome to Next.js!",
  });
  expect(element).toBeInTheDocument();
});
