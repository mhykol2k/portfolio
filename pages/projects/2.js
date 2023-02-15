import {
  Uni,
} from "../../components/bio";
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
        CLI Portfolio <Badge>December 2021 - December 2022</Badge>
      </Title>
      <Uni>Summary</Uni>
      <Divider my={1}></Divider>
      <P>I recently built a Linux CLI (Command Line Interface) style portfolio website using TypeScript. This portfolio website provides a unique and interactive way for users to interact with and learn about my skills and experience.
      </P>
      <Divider my={1}/>
      <P>
      I chose to build the website using TypeScript, a popular programming language that adds static typing to JavaScript. This allowed me to create a more reliable and scalable web application.
      </P>
      <Divider my={1}/>
      <Uni>Purpose</Uni>
      <P>The portfolio website is designed to resemble a Linux terminal, with a command prompt that allows users to interact with the website using commands.
        Users can navigate to different sections of the website by typing in specific commands, such as projects, skills, experience, and education.
      </P>
      <Divider my={1}/>
      <Uni>Benefits</Uni>
      <P>I included features such as auto-completion and history commands to make it easier for users to navigate and interact with the website. Additionally, the website provides a help command that lists all the available commands and their corresponding functions.
      <Divider my={1} />
      </P>
      <Uni>Final Comments</Uni>
      <P>Overall, my Linux CLI style portfolio made with TypeScript provides an immersive and memorable experience for users. Its unique design and interactive features set it apart from traditional portfolio websites and showcase my skills and experience in a new and exciting way.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript</span>
        </ListItem>
        <ListItem>
          <Meta>Production</Meta>
          <Link href="https://www.mhykol.dev/">
            Click Here
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>12/06/2022</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <ProjectImage src="/images/projects/image_04.png" alt="image" />
      <ProjectImage src="/images/projects/image_05.png" alt="image" /> */}
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
