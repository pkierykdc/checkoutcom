import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { TextField, TextFieldProps } from "./TextField";

export default {
  title: "TextField",
  component: TextField
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: {
    name: "name",
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    value: "input value"
  },
  meta: {
    error: false,
    touched: false
  }
};
