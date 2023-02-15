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

const Work = () => (
  <Layout title="Database Project">
    <Container>
      <Title>
        Database Project <Badge>May 2022 - June 2022</Badge>
      </Title>
      <Uni>Summary</Uni>
      <Divider my={1}></Divider>
      <P>
        The project was designed to demonstrate proficiency in PHP and SQL,
        specifically the ability to read from and write to a database, as well
        as edit and update information within the database. The project was
        developed in a group environment, using Git and GitHub for version
        control and collaboration.
      </P>
      <Divider my={1} />
      <Uni>Purpose</Uni>
      <P>
        The project involved creating a user interface, which allowed users to
        perform CRUD operations (Create, Read, Update, Delete) on a database.
        The system was designed to store and retrieve data in a relational
        database, using SQL queries to manipulate the data. The user interface
        was built using PHP and HTML, and it provided an intuitive way for users
        to interact with the data, allowing them to view, edit, and delete
        records.
      </P>
      <Divider my={1} />
      <Uni>Final Comments</Uni>
      <P>
        The project showcased our ability to design and implement a database
        management system using PHP and SQL. It also demonstrated our ability to
        create a user-friendly web interface and our proficiency in using Git
        and GitHub for version control and collaboration. Overall, the project
        provided a valuable learning experience in developing web applications
        using PHP and SQL, as well as working collaboratively as a team using
        modern development practices.
      </P>

      <List my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, HTML, CSS & JavaScript</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/mhykol2k/gr8danes/archive/refs/heads/main.zip">
            latest-v2.1
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Last update</Meta>
          <span>30/06/2022</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <SimpleGrid columns={1} gap={2}>
        <ProjectImage src="" />
        <ProjectImage src="" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
