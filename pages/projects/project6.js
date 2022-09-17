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
    <Layout title="ADB Group">
      <Container>
        <Title>
          Adavnced Databases Group Project <Badge>May 2022 - June 2022</Badge>
        </Title>
        <P>
          Advanced Databases and Big Data Module
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
            <span>PHP, JavaScript, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="">
              v0.1.1
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>21/07/2021</span>
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
          <WorkImage src="" />
          <WorkImage src="" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'