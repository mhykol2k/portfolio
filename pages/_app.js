import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import Chakra from "../components/chakra";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default Website;
