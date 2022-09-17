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
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Pokedex Project">
      <Container>
        <Title>
        Pokedex Project <Badge>May 2021- Jun 2021</Badge>
        </Title>
        <P>
          Information
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Express.js</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="">
              v0.1.0
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>03/06/2021</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media</Center>
        </Heading>

        <WorkImage src="/images/projects/image_06.png" alt="image" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/projects/image_07.png" alt="image" />
          <WorkImage src="/images/projects/image_08.png" alt="image" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'