import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { Colors, DarkTheme, LightTheme } from "../Colors";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(LightTheme.background, DarkTheme?.background)(props),
      color: mode(LightTheme?.textColor, DarkTheme?.textColor)(props),
      transitionProperty: "background-color",
      transitionDuration: "500ms",
      transitionTimingFunction: "ease-in-out",
    },
    a: {
      _hover: {
        textDecoration: "none",
        color:
          props.colorMode === "light"
            ? Colors?.primaryColor
            : Colors?.primaryColor,
      },
    },
  }),
};

export default styles;
