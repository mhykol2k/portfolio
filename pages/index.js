import Nextlink from 'next/link'
import { Link, Container, Heading, Box, SimpleGrid, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/links/inkdrop_eyecatching.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
            Full-stack developer based near London.
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michael McLain
                    </Heading>
                    <p>Junior Software Engineer (Frontend/Backend)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                >
                    <ProfileImage
                        src="/images/mhykol.jpg"
                        alt="Profile Picture"
                        borderRadius="full"
                        width="100%"
                        height="100%"
                    />
                </Box>
                </Box>
            </Box>

            <Section delay={1.0}>
                <Heading as="h3" variant="section-title">
                    Projects
                </Heading>
                <Paragraph>
                        Michael (mhykol) is a freelance and full-stack developer, based near London with a passion for building and creating software. 
                        Something {' '}
                    <Nextlink href="/works/inkdrop" passHref scroll={false}>
                        <Link>Inkdrop</Link>
                    </Nextlink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <Nextlink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Portfolio
                        </Button>
                    </Nextlink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Summary
                </Heading>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Born in Chandler Arizona, United States.
                    </BioSection>
                    <br></br>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed A-Levels from Tendring Technology College
                    </BioSection>
                    <br></br>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Completed BEng Software Engineering and graduated from Canterbury Christ Church University with First Class Honours.
                    </BioSection>
                    <br></br>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Got a job?
                    </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                    <Paragraph>
                        Machine Learning, Algorithmns, C#. 
                    </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Find me
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/mhykol2k" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                            </Button>
                        </Link>
                        <Link href="https://twitter.com/mhykol2k" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com/michaeljmclain" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin />}
                            >
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'