import Nextlink from 'next/link'
import { Link, Container, Heading, Box, SimpleGrid, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import { ChatIcon, ChevronRightIcon, EditIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Stack } from '@chakra-ui/react'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/links/inkdrop_eyecatching.png'
import Image from 'next/image'
import { InputGroup, Input } from '@chakra-ui/react'
import { InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons'
import { Textarea } from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>



            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Contact Me
                </Heading>

                <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.400'
                        fontSize='1.2em'
                        children={<ChatIcon color='gray.400'/>}
                    />
                    <Input variant='filled' focusBorderColor='teal.400' placeholder='Enter Name' type='name'/>
                    <InputRightElement children={<CheckIcon color='green.500' />} />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children='+44' color='gray.400'
                    />
                    <Input variant='filled' focusBorderColor='teal.400' type='tel' placeholder='Phone number' />
                    <InputRightElement children={<CheckIcon color='green.500' />} />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.400'
                        fontSize='1.2em'
                        children={<EmailIcon color='gray.400' />}
                    />
                    <Input variant='filled' focusBorderColor='teal.400' type='email' placeholder='Enter Email' />
                    <InputRightElement children={<CheckIcon color='green.500' />} />
                  </InputGroup>

                  <InputGroup>
                    <Textarea variant='filled' color='gray.400' size='md' placeholder='Extended Message' />
                    <InputRightElement children={<CheckIcon color='green.500' />} />
                  </InputGroup>
                </Stack>
                
                <Box align="center" my={4}>
                    <Nextlink href="" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Submit
                        </Button>
                    </Nextlink>
                </Box>
            </Section>
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'