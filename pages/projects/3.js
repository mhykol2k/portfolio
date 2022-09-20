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
    Divider
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Voxel">
      <Container>
        <Title>
          3D Voxel Portfolio <Badge>Jun 2022-</Badge>
        </Title>
        <Divider my={1}></Divider>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>P[latform</Meta>
            <span>Web-App</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Chakra, Three.js</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="">
              v0.1.12
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>17/09/22</span>
          </ListItem>
          <ListItem>
            <Meta>Manual</Meta>
            <Link href="">wiki</Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'