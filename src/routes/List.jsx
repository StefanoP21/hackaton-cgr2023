import { Search2Icon, ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Container,
  SimpleGrid,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { CardSelect } from '../components/CardSelect';
import { CardInfo } from '../components/CardInfo';
import citiesYauyos from '../data/citiesYauyos.json';
import infobras from '../data/infobras.json';
import { Link } from 'react-router-dom';

const departmentsPeru = [
  {
    id: 1,
    name: 'Lima',
  },
];

const provincesLima = [
  {
    id: 1,
    name: 'Yauyos',
  },
];

export const List = () => {
  return (
    <Container maxWidth="8xl" paddingX={10} marginY={10}>
      <Link to="/">
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="teal"
          size="md"
          variant="solid"
          marginBottom={5}
        >
          Regresar
        </Button>
      </Link>
      <Heading size="lg" marginBottom={10} color="teal">
        Obras para la Reconstrucción con Cambios 2023
      </Heading>
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <CardSelect title="Departamentos" arr={departmentsPeru} />
        <CardSelect title="Provincias" arr={provincesLima} />
        <CardSelect title="Distritos" arr={citiesYauyos} />
      </SimpleGrid>
      <Button
        leftIcon={<Search2Icon />}
        colorScheme="teal"
        size="md"
        variant="solid"
        marginTop={5}
      >
        Buscar Obras
      </Button>
      <Divider marginY={10} />
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <CardInfo arr={infobras} />
      </SimpleGrid>
    </Container>
  );
};
