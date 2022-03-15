import { FormApi } from "final-form";
import React from "react";
import { Field, Form } from "react-final-form";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Button, StarRatingField, TextArea, TextField } from "../";
import { queryClient } from "../../index";
import { QueryKeys } from "../../services/queryKeys";
import { addNewReview } from "../../services/reviews.service";
import { Review } from "../../services/types";
import { composeValidators, email, required } from "../../utils/form-validators";

type FormValues = Omit<Review, "date">;

export function ReviewForm() {
  const mutation = useMutation(addNewReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.REVIEWS);
    }
  });

  const onSubmit = (values: FormValues, form: FormApi<Omit<Review, "date">, Omit<Review, "date">>) => {
    mutation.mutate(values);
    form.restart();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        name: "",
        email: "",
        rating: 0,
        comment: ""
      }}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
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
            component={StarRatingField}
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

const FormLabel = styled.label`
  display: inline-block;
  padding-bottom: 10px;
`;
