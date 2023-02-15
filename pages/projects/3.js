import { Uni } from "../../components/bio";
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider,
  Center,
  Heading,
  UnorderedList,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, Meta } from "../../components/project";
import P from "../../components/paragraph";

const Work = () => (
  <Layout title="Portfolio">
    <Container>
      <Title>
        Portfolio <Badge>December 2022 - Present</Badge>
      </Title>
      <Uni>Summary</Uni>
      <Divider my={1}></Divider>
      <P>
        The website features a modern and dynamic design, thanks to the use of
        Three.js, a popular 3D graphics library that allowed me to create and
        display 3D models, animations, and visual effects. This gives the
        website a unique and immersive feel that sets it apart from traditional
        portfolio websites.
      </P>
      <Divider my={1} />
      <P>
        ChakraUI, a popular React component library, provided a robust set of
        pre-built UI components that I could use to design the website's layout
        and user interface. This allowed me to save time and focus on building
        the website's functionality rather than designing and styling each
        individual component from scratch.
      </P>
      <Divider my={1} />
      <Uni>Purpose</Uni>
      <P>
        The website is built using Next.js, a powerful React-based framework
        that provides server-side rendering, static site generation, and other
        features to improve website performance and user experience. These
        features helped me to optimize the website's speed and performance,
        making it faster and more efficient for users.
      </P>
      <Divider my={1} />
      <Uni>Benefits</Uni>
      <P>
        Additionally, the website includes sections for my projects, skills,
        experience, and education, each accessible through a clear and intuitive
        navigation menu. The website also includes features such as an
        interactive 3D model viewer, allowing users to view my 3D models and
        designs in a more interactive and engaging way.
        <Divider my={1} />
      </P>
      By integrating with a database through an API, the app can provide
      real-time data access, making it an efficient and effective tool for
      managing sales transactions and inventory. This also allows tracking of
      sales and inventory levels.
      <Divider my={1} />
      <Uni>Final Comments</Uni>
      <P>
        Overall, my development portfolio website made using Three.js, ChakraUI,
        and Next.js provides a unique and dynamic experience for users,
        showcasing my skills and experience as a software developer in an
        engaging and immersive way.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Three.js, Next.js React.js, ChakraUI</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/mhykol2k/gr8danes/archive/refs/heads/main.zip">
            latest-v2.1
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Last update</Meta>
          <span>15/02/2023</span>
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
