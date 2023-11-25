import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Container, Heading, Button } from '@chakra-ui/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CardObra, TableObra } from '../components';

export const Infobra = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { codINFOBRAS } = useParams();

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
    <Container maxWidth="8xl" padding={10}>
      <Link to="/hackaton-cgr2023/lista">
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="gray"
          size="md"
          variant="outline"
          marginBottom={5}
        >
          Regresar
        </Button>
      </Link>
      <Heading size="lg" marginBottom={10} color="red.600">
        Información de la Obra
      </Heading>
      <CardObra
        codINFOBRAS={codINFOBRAS}
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
