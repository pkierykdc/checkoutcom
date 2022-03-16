import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { TextArea, TextAreaProps } from "./TextArea";

export default {
  title: "TextArea",
  component: TextArea
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

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
