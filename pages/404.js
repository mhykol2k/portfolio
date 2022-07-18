import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading align="center" as="h1">Thank You Mario! But Our Princess Is In Another Castle!</Heading>
            <Text align="center">The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Return Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound