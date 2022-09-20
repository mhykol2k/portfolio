import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import Footer from "../footer";
import Loader from "../loader";
import { Box, Container } from "@chakra-ui/react";

const LazyItem = dynamic(() => import("../item"), {
  ssr: false,
  loading: () => <Loader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <meta name="description" content="Michael's Portfolio" />
        <meta name="author" content="Michael" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="og:site_name" content="Michael McLain" />
        <meta name="og:title" content="Michael" />
        <meta name="og:type" content="website" />
        <title>Michael</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyItem />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
