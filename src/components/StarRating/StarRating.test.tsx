import { render, screen } from "@testing-library/react";
import React from "react";
import { StarRating } from "./StarRating";

describe("<StarRating />", () => {
  it("renders correctly", () => {
    render(<StarRating rating={5} />);
    expect(screen.getByTestId("StarRatingComponent")).toBeInTheDocument();
  });

  it("renders number of filled star icons correctly", () => {
    render(<StarRating rating={1} />);
    expect(screen.getAllByTestId("StarRatingComponentStarFilled")).toHaveLength(1);
  });
});
