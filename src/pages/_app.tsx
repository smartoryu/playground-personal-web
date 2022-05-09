import "../styles/globals.css";
import "@fontsource/poppins";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    // body: "Poppins, system-ui, sans-serif",
    heading:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    // mono: "Poppins, Menlo, monospace",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
