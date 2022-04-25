import ColorSchemeProvider from "src/contexts/color-scheme";
import { CustomAppProps } from "src/types";
import Head from "next/head";
import "src/styles/globals.scss";

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
