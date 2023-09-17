import type { Meta, StoryObj } from "@storybook/react";
import AnimationButton from "src/components/AnimationButton/AnimationButton";

const meta = {
  title: "Example/AnimationButton",
  component: AnimationButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof AnimationButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
