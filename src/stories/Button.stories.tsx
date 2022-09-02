import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "outline", "text"],
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    disableShadow: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "default",
  color: "primary",
  size: "md",
  disabled: false,
  disableShadow: false,
  variant: "default",
};

export const Outline = Template.bind({});

Outline.args = {
  children: "default",
  color: "primary",
  size: "md",
  disabled: false,
  variant: "outline",
};

export const Text = Template.bind({});

Text.args = {
  children: "default",
  color: "primary",
  size: "md",
  disabled: false,
  variant: "text",
};

export const LeftIcon = Template.bind({});

LeftIcon.args = {
  children: "default",
  color: "primary",
  size: "md",
  disabled: false,
  disableShadow: false,
  startIcon: "local_grocery_store",
  variant: "default",
};

export const RightIcon = Template.bind({});

RightIcon.args = {
  children: "default",
  color: "primary",
  size: "md",
  disabled: false,
  disableShadow: false,
  endIcon: "local_grocery_store",
  variant: "default",
};
