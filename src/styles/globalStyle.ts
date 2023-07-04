import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fontSizes } from "./fontSize";
import { buttons } from "./buttons";

export const theme = extendTheme({
  colors,
  fontSizes,
  components: {
    Button: buttons,
  },
  styles: {
    global: {
      "html, body": {
        background: colors.white,
        color: colors.black,
      },
    },
  },
});
