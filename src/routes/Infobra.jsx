import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Container, Heading, Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { CardObra } from '../components/CardObra';
import { TableObra } from '../components/TableObra';

export const Infobra = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const paramNames = [
    'imageURL',
    'name',
    'entity',
    'modality',
    'type',
    'state',
    'local',
    'address',
    'amount',
    'enterprise',
    'ruc',
    'person',
    'dni',
    'cip',
  ];

  const paramValues = paramNames.reduce((obj, paramName) => {
    obj[paramName] = params.get(paramName);
    return obj;
  }, {});

  const {
    imageURL,
    name,
    entity,
    modality,
    type,
    state,
    local,
    address,
    amount,
    enterprise,
    ruc,
    person,
    dni,
    cip,
  } = paramValues;

  return (
    <Container maxWidth="8xl" paddingX={10} marginY={10}>
      <Link to="/lista">
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
      <CardObra
        imageURL={imageURL}
        name={name}
        entity={entity}
        modality={modality}
        type={type}
        state={state}
        local={local}
        address={address}
        amount={amount}
      />
      <TableObra
        enterprise={enterprise}
        ruc={ruc}
        amount={amount}
        person={person}
        dni={dni}
        cip={cip}
      />
    </Container>
  );
};
