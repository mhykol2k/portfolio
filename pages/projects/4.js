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
  <Layout title="Next-Pokédex">
    <Container>
      <Title>
        Next-Pokédex <Badge>May 2021- June 2021</Badge>
      </Title>
      <Divider my={1}></Divider>
      <P>Personal Project created to swiftly identify the shiny variant(s) of any Pokémon registered to official the Pokédex.</P>
      <P>Allows the user to search a Pokémon name and quickly returns what the shiny variant(s) look like without having to use Google.</P>
      <br></br>
      <P>Uses <b>PokéAPI v2</b>.</P>

      <Heading as="h4" fontSize={16} my={6}>
        Roadmap
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>Search by Pokémon ID.</ListItem>
        <ListItem>Search by Pokémon type.</ListItem>
        <ListItem>Search by Pokémon status (Legendary, Mythical, Ultra Beast).</ListItem>
        <ListItem>Use the '+' operator to initiate search for the entire Pokémon evolution line.</ListItem>
        <ListItem>Combine strings with the '&' operator, and create complex queries.</ListItem>
        <ListItem>Add Pokémon with the ',' operator as a separator to display specific Pokémon.</ListItem>
        <ListItem>Use the'!' operator to exclude specific Pokémon from the search.</ListItem>
       
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, (PokéAPI v2).</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="">v0.1.0</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>03/06/2021</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <ProjectImage src="/images/projects/image_06.png" alt="image" />
      <SimpleGrid columns={2} gap={2}>
        <ProjectImage src="/images/projects/image_07.png" alt="image" />
        <ProjectImage src="/images/projects/image_08.png" alt="image" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
