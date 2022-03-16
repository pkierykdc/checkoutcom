import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button
} as Meta;

// @ts-ignore
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  disabled: false,
  children: "button content"
};
