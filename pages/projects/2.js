import {
  Container,
  Badge,
  Center,
  Link,
  Image,
  List,
  ListItem,
  Divider,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="CLI-Portfolio">
    <Container>
      <Title>
        CLI-Portfolio <Badge>May 2021-</Badge>
      </Title>
      <Divider my={1}></Divider>
      <P>Information</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
            website address <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, JavaScript, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            Blogpost <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/image_04.png" alt="image" />
      <WorkImage src="/images/projects/image_05.png" alt="image" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
