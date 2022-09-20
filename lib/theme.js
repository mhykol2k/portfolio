import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#22272E")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 2,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#88ccca")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
