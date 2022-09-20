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

const Project = () => (
  <Layout title="Epos App">
    <Container>
      <Title>
        Epos Application <Badge>December 2021 - August 2022</Badge>
      </Title>
      <Divider my={1}></Divider>
      <P>
        Complete Flutter Application that sends finished orders to an existing inventory management
        system via REST API.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Flutter</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>IOS, MacOS, Android, Windows, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Dart, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/mhykol2k/gr8danes/archive/refs/heads/main.zip">latest-v1.0.0</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>22/08/2022</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <SimpleGrid columns={1} gap={2}>
        <ProjectImage src="/images/projects/image_01.png" alt="image" />
        <ProjectImage src="/images/projects/image_02.png" alt="image" />
      </SimpleGrid>
      <ProjectImage src="/images/projects/image_03.png" alt="image" />
    </Container>
  </Layout>
);

export default Project;
export { getServerSideProps } from "../../components/chakra";
