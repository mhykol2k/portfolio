import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'


const NotFound = () => {
    return (
        <Container>
            <Heading align="center" as="h1">You appear to be lost!</Heading>
            <Text align="center">The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Return Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound