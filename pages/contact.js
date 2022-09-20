import Nextlink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  useColorMode,
  chakra,
} from "@chakra-ui/react";
import {
  ChatIcon,
  ChevronRightIcon,
  EditIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
import { InputGroup, Input } from "@chakra-ui/react";
import { InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/react";
import HookForm from "../components/hook-form";

const Home = () => (
  <Layout>
    <Container
      rounded="xl"
      p="8"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
      </Section>

      <Section>
        <HookForm />
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
