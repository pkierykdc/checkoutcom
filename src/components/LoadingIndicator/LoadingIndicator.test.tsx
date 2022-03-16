import { render, screen } from "@testing-library/react";
import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";

describe("<LoadingIndicator />", () => {
  it("renders correctly", () => {
    render(<LoadingIndicator />);
    expect(screen.getByTestId("LoadingIndicatorComponent")).toBeInTheDocument();
  });
});
