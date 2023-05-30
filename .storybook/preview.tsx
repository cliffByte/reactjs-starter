import type { Preview } from "@storybook/react";
import React from "react";
import theme from "../src/utils/theme";

import { ChakraProvider } from "@chakra-ui/react";
import "../src/assets/sass/main.scss";

// .storybook/preview.js
import "bootstrap/dist/css/bootstrap.min.css";

// Only import this if you want to use Bootstrap's
// JQuery helpers
import "bootstrap/dist/js/bootstrap.bundle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
