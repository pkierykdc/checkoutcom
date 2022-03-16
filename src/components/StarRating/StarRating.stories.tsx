import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { StarRating, StarRatingProps } from "./StarRating";

export default {
  title: "StarRating",
  component: StarRating
} as Meta;

const Template: Story<StarRatingProps> = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 4
};
