import Layout from "../components/Layout/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import "../styles/global.scss";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetScope=".ck-reset">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
