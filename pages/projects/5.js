import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
  Divider,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";

const Work = () => (
  <Layout title="Contribution Snake">
    <Container>
      <Title>
        Contribution Snake <Badge>April 2022 - May 2022</Badge>
      </Title>
      <Divider my={1}></Divider>
      <P>
        Pulls my contribution graph and re-creates the classic snake Game we all
        know and love, generates a snake path where the cells get eaten in an
        orderly fashion.
      </P>
      <br></br>
      <P>
        Automatically generates a new svg each day. Which makes for great GitHub
        profile ReadMe.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Can generate a <b>gif</b> or <b>svg</b> image.
        </ListItem>
        <ListItem>
          Supports GitHub <b>Themes</b>.
        </ListItem>
        <ListItem>Looks Awesome.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>GitHub</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="">v1.0.0</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>21/05/2021</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <SimpleGrid columns={1} gap={2}>
        <ProjectImage src="/images/projects/github-contribution-grid-snake.gif" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
