import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

const color = {
  primary: "var(--button-primary-color)",
  secondary: ""
};

const backgroundColor = {
  primary: "var(--button-primary-background-color)",
  secondary: ""
};

const hoverBackgroundColor = {
  primary: "var(--button-primary-background-color-hover)",
  secondary: ""
};

const disabledBackgroundColor = {
  primary: "var(--button-primary-background-color-disabled)",
  secondary: ""
};

const focusBorderColor = {
  primary: "var(--button-primary-border-color-focus)",
  secondary: ""
};

export const Button = styled.button<ButtonProps>`
  max-width: 350px;
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 1px solid transparent;
  font-weight: 700;
  color: ${({ variant }) => variant && color[variant] || "var(--button-default-color)"};
  background-color: ${({ variant }) => variant && backgroundColor[variant] || "var(--button-default-background-color)"};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${({ variant }) => variant && hoverBackgroundColor[variant] || 
    "var(--button-default-background-color-hover)"};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ variant }) => variant && disabledBackgroundColor[variant] || 
    "var(--button-default-background-color-disabled)"};
  }

  &:focus {
    outline: 0;
    border-color: ${({ variant }) => variant && focusBorderColor[variant] || 
    "var(--button-default-border-color-focus)"};
  }
`;
