import type { Preview, ReactRenderer } from "@storybook/react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

/* TODO: update import for your custom Material UI themes */

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      defaultTheme: "light",
    }),
  ],
};

export default preview;
