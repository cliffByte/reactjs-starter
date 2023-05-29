import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import ButtonTheme from "./components/Button";
import { checkboxTheme } from "./components/Checkbox";
import containerTheme from "./components/Container";
import InputTheme from "./components/Input";
import selectTheme from "./components/Select";
import ToastTheme from "./components/Toast";
import styles from "./styles";
// color mode config
const colorConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// extend the theme
const theme = {
  colorConfig,
  styles,
  components: {
    Container: containerTheme,
    Button: ButtonTheme,
    Input: InputTheme,
    Select: selectTheme,
    Checkbox: checkboxTheme,
    useToast: ToastTheme,
    Steps,
    Modal: {
      defineStyle: {
        sizes: { xl: { Content: { width: "90vw" } } },
      },
    },
  },
  config: {
    disableTransitionOnChange: true,
  },
  fonts: {
    body: `helveticaregular`,
  },
};

export default extendTheme(theme);
