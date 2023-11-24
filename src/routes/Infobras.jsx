import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Container, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CardObra } from '../components/CardObra';
import infobras from '../data/infobras.json';
import { TableObra } from '../components/TableObra';

export const Infobras = () => {
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
        Información de la Obra
      </Heading>
      <CardObra />
      <TableObra />
    </Container>
  );
};
