import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Field, Form } from "react-final-form";
import { TextField } from "./TextField";
import { required } from "../../utils/form-validators";

describe("<TextField />", () => {
  it("renders correctly", () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} render={() => (
      <Field name="textfield" component={TextField} />
    )} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("reacts on change event", () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} render={() => (
      <Field name="textfield" component={TextField} />
    )} />);
    const el = screen.getByRole("textbox");
    expect(el).toBeInTheDocument();
    fireEvent.change(el, { target: { value: "text" } });
    expect(el).toHaveValue("text");
  });

  it("shows error", () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} render={({ handleSubmit }) => (
      <form data-testid="form" onSubmit={handleSubmit}>
        <Field name="textfield" component={TextField} validate={required} />
      </form>
    )} />);
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
    fireEvent.submit(form);
    expect(screen.getByText("This field is required.")).toBeInTheDocument();
  });
});
