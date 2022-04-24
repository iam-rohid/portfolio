import "../styles/globals.css";
import type { AppProps } from "next/app";
import ColorSchemeProvider from "../contexts/color-scheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeProvider>
      <Component {...pageProps} />
    </ColorSchemeProvider>
  );
}

export default MyApp;
