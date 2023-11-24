import { WarningIcon, CopyIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const CardObra = ({
  codINFOBRAS,
  imageURL,
  name,
  entity,
  modality,
  type,
  state,
  local,
  address,
  amount,
}) => {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      variant="outline"
      marginBottom={10}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', md: '500px' }}
        src={imageURL}
        alt={name}
      />
      <Stack>
        <CardBody paddingBottom={0}>
          <Heading size="sm" paddingBottom="4">
            {name}
          </Heading>
          <Text py="2">
            <b>Código INFOBRAS:</b> {codINFOBRAS}
          </Text>
          <Text py="2">
            <b>Entidad:</b> {entity}
          </Text>
          <Text py="2">
            <b>Modalidad:</b> {modality}
          </Text>
          <Text py="2">
            <b>Tipo de obra:</b> {type}
          </Text>
          <Text py="2">
            <b>Estado:</b> {state}
          </Text>
          <Text py="2">
            <b>Ubicación:</b> {local}
          </Text>
          <Text py="2">
            <b>Dirección:</b> {address}
          </Text>
          <Text py="2">
            <b>Monto aprobado:</b> S/. {amount}
          </Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing="6">
            {/* TODO: Add link to report */}
            <Link
              to={`https://github.com/StefanoP21/hackaton-cgr2023`}
              target="_blank"
            >
              <Button
                rightIcon={<WarningIcon />}
                variant="solid"
                colorScheme="red"
              >
                Reportar
              </Button>
            </Link>
            <Button
              leftIcon={<CopyIcon />}
              variant="outline"
              colorScheme="teal"
            >
              {codINFOBRAS}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};
