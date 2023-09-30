import Layout from "../components/Layout/layout";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :global(html) {
          font-family: ${inter.style.fontFamily};
        }
        :global(html) body {
          background-color: #f2f2f2;
        }
        :global(html) *,*::after,*::before {
          margin:0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>{" "}
      {/* Apply global styles using :global */}
      <ChakraProvider resetScope=".ck-reset">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
