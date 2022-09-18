import Nextlink from 'next/link'
import { Link, Container, Heading, Box, Divider, Button, List, ListItem, useColorModeValue, Collapse, chakra } from '@chakra-ui/react'
import { ChevronRightIcon, LinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BulletPoint, Dates, Programmes, ProgrammesList, Uni } from '../components/bio'
import Grade from '../components/grade'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import React from 'react';
import CollapseEx from '../components/collapse-toggle-button'

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
                Graduate Software Engineer based in the United Kingdom
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michael McLain
                    </Heading>
                    <p>C#, Flutter and React Developer</p>
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
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Professional Experience
                </Heading>
                    <Dates>May 2022 - Present</Dates>
                    <Uni>Silver Linings Group LTD</Uni>
                    <Divider my={1} />
                    <Grade>
                        Jr. Software Engineer (Internship)
                    </Grade>
                        <Programmes>Duties:</Programmes>
                    <ProgrammesList>
                        ...
                    </ProgrammesList>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                    <Dates>Sept 2019 - June 2022</Dates>
                    <Uni>Canterbury Christ Church University</Uni>
                    <Divider my={1} />
                    <Grade>
                        Bachelor of Engineering - Software Engineering
                    </Grade>
                    <BulletPoint>
                        <li>
                                <b>Awarded First Class Honours Degree</b>
                        </li>
                    </BulletPoint>
                    <Programmes>Programmes:</Programmes>
                    <ProgrammesList>
                        Data Structures, Algorithmns, Object-Oriented Programming in C#, Frameworks, Advanced Operating Systems, Advanced Databases, Big Data, Networking, Human Computer Interaction, Software Lifecycles and Cybersecurity.
                    </ProgrammesList>

                    <Box align="center" my={3}>
                    <CollapseEx />
                    </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Projects
                </Heading>
                <Divider my={1} />
                <Box align="center" my={4}>
                    <Nextlink href="/projects" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Projects
                        </Button>
                    </Nextlink>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    CV
                </Heading>
                <Divider my={1} />
                <Box align="center" my={4}>
                    <a href="/CV.pdf" passHref target="_blank">
                        <Button rightIcon={<LinkIcon />} colorScheme="teal">
                            CV
                        </Button>
                    </a>
                </Box>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Summary
                </Heading>
                <Divider my={1} />
                    <BioSection>
                        <BioYear>2022</BioYear>
                       Internship at Silver Linings Group LTD.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                       Graduated from University with First Class Honours.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Enrolled on a Software Engineering Degree.
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        Completed A-Levels.
                    </BioSection>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Relocated to London, United Kingdom.
                    </BioSection>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Born in Chandler Arizona, United States.
                    </BioSection>
            </Section>
            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Divider my={1} />
                    <Paragraph>
Even outside of work, I spend much of my
time working on building computers and
developing personal applications. When not
programming, I also enjoy running and
staying active outdoors, as well as keeping
up with my reading in both fiction and
computer magazines.</Paragraph>
            </Section>
            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    Find me
                </Heading>
                <Divider my={1} />
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