import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { ErrorText } from "./ErrorText";

export default {
  title: "ErrorText",
  component: ErrorText
} as Meta;

const Template: Story = (args) => <ErrorText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Error message"
};
