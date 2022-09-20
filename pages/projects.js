import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import project1 from '../public/images/projects/project1.png'
import project2 from '../public/images/projects/project2.png'
import project3 from '../public/images/projects/project3.png'
import project4 from '../public/images/projects/project4.png'
import project5 from '../public/images/projects/project5.png'
import project6 from '../public/images/projects/project6.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <br></br>
      <Heading as="h3" align="center" fontSize={28} mb={2} textDecoration="underline" textUnderlineOffset={8} textDecorationThickness= {2}>
        Recent Projects
      </Heading>

      <Divider my={6}/>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="project1" title="EPOS / Bar App" thumbnail={project1}>
            Electronic Point of Sale Application built using Flutter, built for client in Frinton-on-Sea.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="project2" title="Linux CLI Portfolio" thumbnail={project2}>
          'Linux Style' Command Line Interface Portfolio. Built with TypeScript and tested with Cypress.
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="project3" title="3D Voxel Portfolio" thumbnail={project3}>
            Voxel Portfolio created using Three.js, ChakraUI and Next.js
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id="project4" thumbnail={project4} title="Next.js Pokèdex">
            Pokèdex Project
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" align="center" fontSize={28} mb={2} textDecoration="underline" textUnderlineOffset={8} textDecorationThickness= {2}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem id="project5" thumbnail={project5} title="GitHub Snake">
            A snake that eats GitHub contributions
          </ProjectGridItem>
        </Section>
        <Section delay={0.3}>
          <ProjectGridItem id="project6" thumbnail={project6} title="Advanced DB Project">
            University group project
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={28} mb={4}>
          Old Projects
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
        </Section>
      </SimpleGrid> */}
      <Divider my={6} />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'