import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";

export default {
  title: "LoadingIndicator",
  component: LoadingIndicator
} as Meta;

const Template: Story = (args) => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
 
};
