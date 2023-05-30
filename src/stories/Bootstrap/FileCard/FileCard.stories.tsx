import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import LanguageProvider from "../../../contexts/languageContext";
import { FileCard } from "../../../ui/organisms/FileCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Bootstrap/FileCard",
  component: FileCard,

  // hello hello
  argTypes: {
    type: {
      options: [
        "Photo",
        "Video",
        "Audio",
        "Pdf",
        "MS Excel",
        "MS Word",
        "Zip",
        "Other",
      ],
      control: { type: "select" },
    },
    link: {
      control: { type: "file", accept: "*" },
    },
    title: {
      type: "string",
    },
  },
} satisfies Meta<typeof FileCard>;

export default meta;
type Story = StoryObj<typeof meta>;
// this is story
export const Primary: Story = {
  decorators: [
    (Story) => (
      <Router>
        <LanguageProvider>
          {/* asfdjhsahgfajs */}
          <Story />
        </LanguageProvider>
      </Router>
    ),
  ],
  render: (args) => {
    return (
      <div style={{ flexDirection: "column-reverse" }}>
        <FileCard {...args} />
      </div>
    );
  },
  // These are the args
  args: {
    type: "Photo",
    link: "",
    title: "",
    subTitle: "",
  },
};
