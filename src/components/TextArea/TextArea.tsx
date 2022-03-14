import React from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";
import { ErrorText } from "../";

type TextAreaProps = FieldRenderProps<string, any>;

export const TextArea: React.FC<TextAreaProps> = ({ input, meta, ...rest }) => (
  <Wrapper>
    <Textarea {...input} {...rest} aria-describedby="textAreaError" />
    {meta.error && meta.touched && <ErrorText id="textAreaError" aria-live="assertive">{meta.error}</ErrorText>}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px; 
  margin-bottom: 24px;  
`;

const Textarea = styled.textarea`
  background: var(--text-field-background-color);
  border: 1px solid transparent;
  border-radius: var(--text-field-border-radius);
  height: 50px;
  padding: 15px;
  outline: 0;
  width: 100%;
  color: var(--text-color-primary);
  max-width: 100%;
  min-width: 100%;
  min-height: 100px;
  max-height: 500px;

  &:focus {
    outline: 0;
    border-color: var(--text-field-border-color-focus);
  }
`;
