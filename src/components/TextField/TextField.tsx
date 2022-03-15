import React from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";
import { ErrorText } from "../";

type TextFieldProps = FieldRenderProps<string, any>;

export const TextField: React.FC<TextFieldProps> = ({ input, meta, ...rest }) => (
  <Wrapper>
    <Input type="text" {...input} {...rest} aria-describedby="textFieldError" />
    {meta.error && meta.touched && <ErrorText id="textFieldError" aria-live="assertive">{meta.error}</ErrorText>}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px; 
  margin-bottom: 24px;  
`;

const Input = styled.input`
  background: var(--text-field-background-color);
  border: 1px solid transparent;
  border-radius: var(--text-field-border-radius);
  height: 50px;
  padding: 0 15px;
  outline: 0;
  width: 100%;
  color: var(--text-color-primary);

  &:focus {
    outline: 0;
    border-color: var(--text-field-border-color-focus);
  }
`;
