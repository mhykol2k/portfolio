import Nextlink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Divider,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Collapse,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { Meta } from "/components/project";
import {
  BioSection,
  BioYear,
  BulletPoint,
  Dates,
  Programmes,
  ProgrammesList,
  Uni,
} from "../components/bio";
import Grade from "../components/grade";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem, Badge } from "@chakra-ui/react";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import Image from "next/image";
import React from "react";
import CollapseEx from "../components/collapse-toggle-button";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Currently working for TECNIQ
      </Box> */}
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael McLain
          </Heading>
          <p>Software Developer</p>
          {/* <a href="/CV.pdf" passHref target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              CV
            </Button>
          </a> */}
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/mhykol.jpg"
              alt="Profile Picture"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <Badge float="right">Sept 2019 - June 2022</Badge>
        <Uni as="h1">Canterbury Christ Church University</Uni>
        <Divider my={1} />
        <Grade> - Bachelor of Engineering (BEng), Software Engineering</Grade>
        <i> - Graduated With First Class Honours</i>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Badge float="right">Dec 2022 - Present</Badge>
        <Uni>TECNIQ</Uni>
        <Grade>Software Developer</Grade>
        <Divider my={1} />
        <ProgrammesList>
          Currently I am leading the development of TECNIQ's proprietary
          inventory control system to introduce traceability into the company.
          Utilising technical proficiency and project management experience to
          bring innovative ideas to life. Focused on staying ahead of industry
          trends to provide exceptional results for the company, and I'm very
          excited to have joined a company that aligns with my personal
          interests and ambitions.
        </ProgrammesList>
        <Meta>Stack</Meta>
        <span>C#, ASP.NET, SQL</span>

        <Box align="center" my={3}>
          <CollapseEx />
        </Box>
      </Section>
      <Divider my={5} />

      {/* <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Summary
        </Heading>
        <Divider my={1} />
        <BioSection>
          <BioYear>2023</BioYear>
          Started working at TECNIQ / ADP Special Products
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated from University with First Class Honours.
        </BioSection>
        <BioSection>
          <BioYear>2004</BioYear>
          Relocated to London, United Kingdom.
        </BioSection>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Chandler Arizona, United States.
        </BioSection>
      </Section> */}

      <Section delay={0.3}>
        {/* <Heading as="h3" variant="section-title">
          Projects
        </Heading> */}
        <Box align="center" my={2}>
          <Nextlink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              View My Projects
            </Button>
          </Nextlink>
        </Box>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Divider my={1} />
        <Paragraph>
          Outside of work, I spend much of my personal time working on building
          computers and developing applications. When I am not programming, I
          enjoy running and staying active outdoors.
        </Paragraph>
      </Section>

      <Section delay={0.6}>
        <Divider my={1} />
        <List align="center">
          <ListItem>
            <Link href="https://github.com/mhykol2k" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/michaeljmclain/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
