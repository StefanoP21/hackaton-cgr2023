import { Search2Icon, ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Container,
  SimpleGrid,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CardSelect, CardInfo } from '../components';
import departmentsPeru from '../data/departmentsPeru.json';
import provincesLima from '../data/provincesLima.json';
import citiesYauyos from '../data/citiesYauyos.json';
import obras from '../data/obras.json';

export const List = () => {
  return (
    <Container maxWidth="8xl" padding={10}>
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
        <CardSelect title="Departamento" items={departmentsPeru} />
        <CardSelect title="Provincia" items={provincesLima} />
        <CardSelect title="Distrito" items={citiesYauyos} />
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
        <CardInfo items={obras} />
      </SimpleGrid>
    </Container>
  );
};
