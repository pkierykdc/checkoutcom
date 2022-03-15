import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("renders correctly", () => {
    render(<App />);
    expect(screen.getByText(/new review request/i)).toBeInTheDocument();
  });
});
