import {
  Button,
  Collapse,
  Divider,
  useDisclosure,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  BioSection,
  BioYear,
  BulletPoint,
  Dates,
  Programmes,
  ProgrammesList,
  Uni,
} from "../components/bio";

function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        rightIcon={<ChevronRightIcon />}
        colorScheme="teal"
        onClick={onToggle}
      >
        {" "}
        {isOpen ? "Less" : "More"}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          align="left"
          p=""
          color="useColorModeValue"
          mt="2"
          bg="useColorModeValue"
          rounded="md"
        >
          <Dates>Sept 2017 - June 2019</Dates>
          <Uni>Tendring Technology College Sxith Form</Uni>
          <Divider my={1} />
          <Programmes>A-Level Subjects:</Programmes>
          <ProgrammesList>
            Mathematics, Computer Science, Information Technology, Psychology.
          </ProgrammesList>
          <br></br>
          <Dates>Sept 2011 - June 2017</Dates>
          <Uni>Tendring Technology College</Uni>
          <Divider my={1} />
          <Programmes>GCSE Subjects:</Programmes>
          <ProgrammesList>
            Computer Science, Mathematics, Information Technology, English,
            French.
          </ProgrammesList>
        </Box>
      </Collapse>
    </>
  );
}

export default CollapseEx;
