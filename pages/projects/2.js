import {
  Container,
  Badge,
  Link,
  Heading,
  Center,
  List,
  ListItem,
  Divider,
  UnorderedList,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Portfolio">
    <Container>
      <Title>
        Linux-Portfolio <Badge>May 2021 - June 2022</Badge>
      </Title>
      <Divider my={1}></Divider>
      <P>
        Command Line Interface (CLI) Style Portfolio with an extensive list of
        features:
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <b>Pokémon</b> (Returns a random Pokémon from <b>PokéAPI v2</b>).
        </ListItem>
        <ListItem>
          <b>Quote</b> (Returns a random Quote from <b>"Quotable-API"</b>).
        </ListItem>
        <ListItem>
          <b>Projects</b> (Returns a list of all my <b>"GitHub Projects"</b>).
        </ListItem>
        <ListItem>
          <b>Sum</b> (Displays a complete <b>Summary</b>).
        </ListItem>
        <ListItem>
          <b>CV</b> (Opens my <b>CV</b>).
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Production</Meta>
          <Link href="https://www.mhykol.dev/">
            Portfolio
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, JavaScript, CSS, Prettier</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <ProjectImage src="/images/projects/image_04.png" alt="image" />
      <ProjectImage src="/images/projects/image_05.png" alt="image" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
