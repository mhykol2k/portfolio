import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Collapse,
  Divider,
  useDisclosure,
  Box,
  Badge,
} from "@chakra-ui/react";
import Grade from "../components/grade";
import { Dates, Programmes, ProgrammesList, Uni } from "../components/bio";
import { Meta } from "../components/project";

function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <IconButton
        colorScheme={"teal"}
        icon={isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
        onClick={onToggle}
      ></IconButton>
      <Collapse in={isOpen} animateOpacity transition={{ duration: 1 }}>
        <Box
          align="left"
          color="useColorModeValue"
          mt="2"
          bg="useColorModeValue"
          rounded="md"
        >
          <Badge float="right">July 2021 - Dec 2022</Badge>
          <Uni>Great Danes / The Patio</Uni>
          <Grade>Software Developer</Grade>
          <Divider my={1} />
          <ProgrammesList>
          Proud to have served as a software developer for a Great Danes, where I developed a custom EPOS system to streamline operations and boost efficiency. Committed to staying ahead of industry advancements and delivering outstanding results.
          </ProgrammesList>
          <Meta>Stack</Meta>
          <span>Flutter, Dart, MySQL, GoLang</span>
          <Divider my={5} />
          <Badge float="right">June 2018 - June 2019</Badge>
          <Uni>East of England Co-Op</Uni>
          <Grade>Supermarket Associate</Grade>
          <Divider my={1} />
          <ProgrammesList>
          Began my career as a supermarket associate, where I honed my skills in customer service and teamwork, and gained valuable experience in fast-paced environments. Committed to continuously learning and growing in my career.
          </ProgrammesList>
        </Box>
      </Collapse>
    </>
  );
}

export default CollapseEx;
