import { render, screen } from "@testing-library/react";
import React from "react";
import { ErrorText } from "./ErrorText";

describe("<ErrorText />", () => {
  it("renders correctly", () => {
    render(<ErrorText>error message</ErrorText>);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
});
