import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

export const TableObra = ({ enterprise, ruc, amount, person, dni, cip }) => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
              <Box as="span" flex="1" textAlign="left">
                INFORMACIÓN DE LA EMPRESA
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple" colorScheme="gray">
                <Thead>
                  <Tr bg="gray">
                    <Th color="white" textAlign="center">
                      RAZÓN SOCIAL
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">{enterprise}L</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr bg="gray">
                    <Th color="white" textAlign="center">
                      RUC
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">{ruc}</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr bg="gray">
                    <Th color="white" textAlign="center">
                      MONTO CONTRATADO
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">S/. {amount}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
              <Box as="span" flex="1" textAlign="left">
                INFORMACIÓN DEL SUPERVISOR
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple" colorScheme="gray">
                <Thead>
                  <Tr bg="gray">
                    <Th color="white" textAlign="center">
                      NOMBRES & APELLIDOS
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">{person}</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr bg="gray">
                    <Th color="white" textAlign="center">
                      DNI
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">{dni}</Td>
                  </Tr>
                </Tbody>
                <Thead>
                  <Tr bg="gray">
                    <Th color="white" textAlign="center">
                      NÚMERO DE COLEGIATURA
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">{cip}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
