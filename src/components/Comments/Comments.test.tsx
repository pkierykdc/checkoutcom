import { render, screen } from "@testing-library/react";
import React from "react";
import { Comments } from "./Comments";
import data from "../../data.json";

describe("<Comments />", () => {
  it("renders correctly", () => {
    render(<Comments comments={data.comments}  isLoading={false} />);
    expect(screen.getByText(/addison walls/i)).toBeInTheDocument();
  });

  it("shows correct massage when no data", () => {
    render(<Comments isLoading={false} />);
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });

  it("shows loader when data is loading", () => {
    render(<Comments isLoading={true} />);
    expect(screen.getByTestId("LoadingIndicatorComponent")).toBeInTheDocument();
  });
});
