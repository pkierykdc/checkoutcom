import React, { useRef, useState } from "react";
import { FieldRenderProps } from "react-final-form";
import { useKeyPressEvent } from "react-use";
import styled from "styled-components";
import { Star } from "./Star";
import { ErrorText } from "../";
import { KeyCodes } from "../../utils/consts";

type StarRatingProps = FieldRenderProps<number, any>;

export function StarRating({ input, meta, ...rest }: StarRatingProps) {
  const ref = useRef<any>();
  const [rating, setRating] = useState(input.value);
  const changeRating = (newRating: number) => {
    if (newRating >= 0 && newRating <= 5) {
      setRating(newRating);
      input.onChange(newRating);
    }
  };
  const incrementRating = () => changeRating(Number(rating + 1));
  const decrementRating = () => changeRating(Number(rating - 1));

  useKeyPressEvent(KeyCodes.ARROW_RIGHT, (e) => {
    if (e.target !== ref.current) return;
    return incrementRating();
  });
  useKeyPressEvent(KeyCodes.ARROW_LEFT, (e) => {
    if (e.target !== ref.current) return;
    return decrementRating();
  });

  return (
    <Wrapper ref={ref} tabIndex={0} id={rest.id} aria-describedby="starRatingError">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
      {meta.error && meta.touched && 
        <ErrorText id="starRatingError" aria-live="assertive">{meta.error}</ErrorText>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  margin-bottom: 24px;
`;
