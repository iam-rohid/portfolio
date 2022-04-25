import "src/styles/globals.css";
import ColorSchemeProvider from "src/contexts/color-scheme";
import { CustomAppProps } from "src/types";

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ColorSchemeProvider>
      {getLayout(<Component {...pageProps} />)}
    </ColorSchemeProvider>
  );
}

export default MyApp;
