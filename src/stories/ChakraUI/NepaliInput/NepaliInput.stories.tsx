import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import NepaliInput from "../../../ui/organisms/NepaliInput";

const meta: Meta<typeof NepaliInput> = {
  title: "ChakraUI/NepaliInput",
  component: NepaliInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["outline", "filled", "flushed", "unstyled"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NepaliInput>;

const NepaliInputWithHooks = ({ ...args }) => {
  const [value, setValue] = useState("");
  const handleChange = (e: string) => {
    setValue(e);
  };

  return (
    <NepaliInput
      value={value}
      handleChange={handleChange}
      placeholder="Watch as your input converts to Nepali text"
      {...args}
    />
  );
};

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: string) => {
      setValue(e);
    };
    const { placeholder, error, multiline, readOnly, rows, variant } = args;
    const controllableArgs = {
      placeholder,
      error,
      multiline,
      readOnly,
      rows,
      variant,
    };
    return (
      <NepaliInput
        value={value}
        handleChange={handleChange}
        {...controllableArgs}
      />
    );
    // return <NepaliInputWithHooks {...controllableArgs} />;
  },
  args: {
    placeholder: "Watch as your input converts to Nepali text",
  },
};
