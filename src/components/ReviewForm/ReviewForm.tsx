import React from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { Button, StarRating, TextArea, TextField } from "../";
import { composeValidators, email, required } from "../../utils/form-validators";

interface FormValues {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export function ReviewForm() {
  const onSubmit = (values: FormValues) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Headline>New review request</Headline>

          <FormLabel htmlFor="name">Customer name</FormLabel>
          <Field<string>
            name="name"
            id="name"
            type="text"
            autoComplete="name"
            component={TextField}
            placeholder="Enter name"
            validate={required}
          />
            
          <FormLabel htmlFor="email">Customer email</FormLabel>
          <Field<string>
            name="email"
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            component={TextField}
            placeholder="Enter email"
            validate={composeValidators(required, email)}
          />

          <FormLabel htmlFor="rating">Customer rating</FormLabel>
          <Field<number>
            name="rating"
            id="rating"
            type="email"
            component={StarRating}
            validate={required}
          />

          <FormLabel htmlFor="comment">Customer comment</FormLabel>
          <Field<string>
            name="comment"
            id="comment"
            component={TextArea}
            placeholder="Enter comment"
            validate={required}
          />

          <Button type="submit" disabled={submitting || pristine} variant="primary">Submit</Button>
        </form>
      )}
    />
  );
}

const Headline = styled.h1`
  margin-top: 0;
  margin-bottom: 45px;
`;

const FormLabel = styled.label`
display: inline-block;
  padding-bottom: 10px;
`;
