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
  <Layout title="Shiny Pokedex">
    <Container>
      <Title>
        Shiny Pokedex <Badge>December 2021 - December 2022</Badge>
      </Title>
      <Uni>Summary</Uni>
      <Divider my={1}></Divider>
      <P>
        As a software developer, I had the opportunity to build a Pokedex app
        that displays the shiny variant of every Pokémon and features a search
        menu. The app was built using Next.js and runs on the PokeAPI v2.
      </P>
      <Divider my={1} />
      <Uni>Purpose</Uni>
      <P>
        The app provides an easy-to-use interface that allows users to search
        for any Pokémon and view its shiny variant. The PokeAPI v2 provides a
        wealth of data on each Pokémon, including its shiny form, and allows the
        app to display this information in a clear and concise way.
      </P>
      <Divider my={1} />
      <Uni>Benefits</Uni>
      <P>
        The search menu allows users to quickly find the Pokémon they are
        looking for, using a variety of search filters such as name, type, and
        region. The app also includes a feature that allows users to save their
        favorite Pokémon, making it easy to access them again in the future.
        <Divider my={1} />
      </P>
      The app was built using Next.js, a powerful React-based framework that
      provides server-side rendering, static site generation, and other features
      to improve website performance and user experience. These features helped
      to optimize the app's speed and performance, making it faster and more
      efficient for users.
      <Divider my={1} />
      <Uni>Final Comments</Uni>
      <P>
        In summary, my Pokedex app built using Next.js and running on the
        PokeAPI v2 provides an easy-to-use interface for users to view and
        search for any Pokémon's shiny variant. The app's search menu, favorite
        Pokémon feature, and use of Next.js make it a powerful and efficient
        tool for Pokémon fans and enthusiasts.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.Js</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/mhykol2k/gr8danes/archive/refs/heads/main.zip">
            latest-v2.1
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Last update</Meta>
          <span>01/09/2022</span>
        </ListItem>
      </List>
      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <ProjectImage src="/images/projects/image_06.png" alt="image" />
      <SimpleGrid columns={2} gap={2}>
        <ProjectImage src="/images/projects/image_07.png" alt="image" />
        <ProjectImage src="/images/projects/image_08.png" alt="image" />
      </SimpleGrid> */}
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
