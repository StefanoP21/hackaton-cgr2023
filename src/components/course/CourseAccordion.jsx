import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export const CourseAccordion = ({
  topic1,
  topic2,
  topic3,
  content11,
  content12,
  content21,
  content22,
  content31,
  content32,
}) => {
  return (
    <>
      <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'red.600', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                textTransform="uppercase"
              >
                {topic1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList>
              <ListItem>{content11}</ListItem>
              <ListItem>{content12}</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'red.600', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                textTransform="uppercase"
              >
                {topic2}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList>
              <ListItem>{content21}</ListItem>
              <ListItem>{content22}</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'red.600', color: 'white' }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                textTransform="uppercase"
              >
                {topic3}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList>
              <ListItem>{content31}</ListItem>
              <ListItem>{content32}</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
