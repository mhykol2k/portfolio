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
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Project = () => (
  <Layout title="EPOS Application">
    <Container>
      <Title>
        EPOS-BAR Application <Badge>Dec 2021 - Aug 2022</Badge>
      </Title>
      <Divider my={1}></Divider>
      <Center my={6}>
        <Image src="/images/projects/gr8danes_icon.png" alt="icon" />
      </Center>
      <P>
        EPOS Application that communicates with existing inventory management
        system via API.
      </P>
      <P>Currently the production version is being used in the clients bar.</P>
      <UnorderedList ml={4} my={4}>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>IOS, MacOS, Android, Windows, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="">gr8-latest-1.1.0</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>22/08/2022</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="">wiki</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/projects/image_01.png" alt="image" />
        <WorkImage src="/images/projects/image_02.png" alt="image" />
      </SimpleGrid>
      <WorkImage src="/images/projects/image_03.png" alt="image" />
    </Container>
  </Layout>
);

export default Project;
export { getServerSideProps } from "../../components/chakra";
