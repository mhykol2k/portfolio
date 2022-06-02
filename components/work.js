import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/works" passHref>
            <Link>Works</Link>
        </NextLink>
        <span>
            {' '}
            <ChevronRightIcon />{''}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {chilren}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" width="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ chilren }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)