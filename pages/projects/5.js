import { Uni } from "../../components/bio"
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
  <Layout title="Snake">
    <Container>
      <Title>
        Snake <Badge>December 2021 - December 2022</Badge>
      </Title>
      <Uni>Summary</Uni>
      <Divider my={1}></Divider>
      <P> GitHub Snake game is a fun and creative way to gamify GitHub contributions. The game is built using Python and utilizes GitHub's REST API to retrieve a user's contribution data.
      </P>
      <Divider my={1}/>
      <Uni>Purpose</Uni>
      <P>The game generates a snake that moves along a visual representation of the user's contribution grid, with each square on the grid representing a day. The snake's length increases as the user makes more contributions, and the game is customizable, allowing users to change the snake's appearance and behavior.
      </P>
      <Divider my={1}/>
      <Uni>Benefits</Uni>
      <P>The game is open-source and can be easily installed and run locally on a user's machine. It can also be run as a GitHub Action, allowing users to generate a Snake game animation that can be displayed on their GitHub profile.
      </P>
      <Divider my={1} />
      <Uni>Final Comments</Uni>
      <P>GitHub Snake game is a creative and engaging way to incentivize and visualize GitHub contributions.
        The use of GitHub's REST API provides a valuable way to access and utilize GitHub data, and the game's customization options make it a fun and personalized experience for users.
        The game is a great example of the power and versatility of Python and can serve as a valuable learning tool for developers interested in game development and data visualization.
      </P>

      <List my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/mhykol2k/gr8danes/archive/refs/heads/main.zip">
            latest-v2.1
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Last update</Meta>
          <span>10/10/2021</span>
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
