import "src/styles/globals.css";
import ColorSchemeProvider from "src/contexts/color-scheme";
import { CustomAppProps } from "src/types";
import Head from "next/head";

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ColorSchemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
