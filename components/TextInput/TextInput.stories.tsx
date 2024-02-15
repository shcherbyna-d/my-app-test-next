import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/TextInput",
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    placeholder: "type here",
    value: "",
  },
  argTypes: {
    value: {
      control: "text",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Error: Story = {
  args: {
    error: "wrong text",
  },
};

export const WithText: Story = {
  // args: {
  //   value: "Initial text",
  // },
  render: function Render(args) {
    const [value, setValue] = useState("");

    return (
      <TextInput
        {...args}
        onChange={(value) => {
          args.onChange(value)

          setValue(value);
        }}
        value={value}
      />
    );
  },
};
