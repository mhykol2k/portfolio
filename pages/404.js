import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const NotFound = () => {
  return (
    <Container>
      <Heading align="center" as="h4">
        (404)
      </Heading>
      <Heading align="center" as="h1">
        We lost this page!
      </Heading>
      <Text align="center">
        We searched high and low but couldn't find what you're looking for. Let's find a better place for you to go
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Return Home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
