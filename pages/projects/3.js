import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider,
  Center,
  Heading,
  UnorderedList
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, Meta } from "../../components/project";
import P from "../../components/paragraph";

const Work = () => (
  <Layout title="Voxel">
    <Container>
      <Title>
        3D Voxel Portfolio <Badge>June 2022 - Present</Badge>
      </Title>
      <Divider my={1}></Divider>
      <P>This portfolio aims to showcase all of my projects in one place, to demonstrate my skills as a developer.</P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Implemented 3D GLB Model</ListItem>
        <ListItem>Themed App with 'light' and 'dark' mode</ListItem>

      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Chakra, Three.js</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="">latest-v1.0.0</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>20/09/22</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
