import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClientProvider } from "react-query";
import App from "./App";
import { queryClient } from "..";

describe("<App />", () => {
  it("renders correctly", () => {
    render(<QueryClientProvider client={queryClient}>  
      <App />
    </QueryClientProvider>);
    expect(screen.getByText(/new review request/i)).toBeInTheDocument();
  });
});
