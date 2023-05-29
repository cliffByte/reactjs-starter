import type { Preview } from "@storybook/react";
import theme from "../src/utils/theme";

import "../src/assets/sass/main.scss";

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
