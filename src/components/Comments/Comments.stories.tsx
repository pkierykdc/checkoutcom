import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Comments, CommentsProps } from "./Comments";
import data from "../../data.json";

export default {
  title: "Comments",
  component: Comments
} as Meta;

const Template: Story<CommentsProps> = (args) => <Comments {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  comments: data.comments
};
