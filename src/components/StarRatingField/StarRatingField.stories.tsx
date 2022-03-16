import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { StarRatingField, StarRatingFieldProps } from "./StarRatingField";

export default {
  title: "StarRatingField",
  component: StarRatingField
} as Meta;

const Template: Story<StarRatingFieldProps> = (args) => <StarRatingField {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: {
    name: "name",
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    value: 0
  },
  meta: {
    error: false,
    touched: false
  }
};
