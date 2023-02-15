import { Uni } from "../../components/bio";
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
        EPOS Application <Badge>December 2021 - December 2022</Badge>
      </Title>
      <Uni>Summary</Uni>
      <Divider my={1}></Divider>
      <P>
        This EPOS (Electronic Point of Sale) App is built using Flutter. It is
        designed to connect with a database through an API, enabling efficient
        data retrieval and manipulation.
      </P>
      <Divider my={1} />
      <Uni>Purpose</Uni>
      <P>
        The app features a clean and intuitive user interface that makes it easy
        for users to navigate and operate the system. It allows for management
        of sales transactions and inventory control.
      </P>
      <Divider my={1} />
      <Uni>Benefits</Uni>
      <P>
        One of the key benefits of using Flutter is its cross-platform
        capability, meaning the app can be developed for both Android and iOS
        platforms.
        <Divider my={1} />
      </P>
      By integrating with a database through an API, the app can provide
      real-time data access, making it an efficient and effective tool for
      managing sales transactions and inventory. This also allows tracking of
      sales and inventory levels.
      <Divider my={1} />
      <Uni>Final Comments</Uni>
      <P>
        Finally, the integration of a printer ensures that customers receive
        accurate and professional receipts for their purchases. The app can
        generate these receipts in real-time, providing a seamless and efficient
        transaction experience for both the business and its customers.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web, iOS, MacOS, Android, Windows, Linux.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/mhykol2k/gr8danes/archive/refs/heads/main.zip">
            latest-v2.1
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Last update</Meta>
          <span>21/12/2022</span>
        </ListItem>
      </List>
      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <SimpleGrid columns={1} gap={2}>
        <ProjectImage src="/images/projects/image_01.png" alt="image" />
        <ProjectImage src="/images/projects/image_02.png" alt="image" />
      </SimpleGrid>
      <ProjectImage src="/images/projects/image_03.png" alt="image" /> */}
    </Container>
  </Layout>
);

export default Project;
export { getServerSideProps } from "../../components/chakra";
