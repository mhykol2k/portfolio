import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import Loader from "../loader";

const LazyItem = dynamic(() => import("../item"), {
  ssr: false,
  loading: () => <Loader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <meta name="description" content="Michael's Homepage" />
        <meta name="author" content="Michael" />
        <meta name="author" content="mhykol2k" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Michael" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mhykol2k" />
        <meta name="twitter:creator" content="@mhykol2k" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta name="og:site_name" content="Michael McLain" />
        <meta name="og:title" content="Michael" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://www.craftz.dog/card.png" />
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
