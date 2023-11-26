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
  useToast,
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
  const toast = useToast();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: 'Copiado al portapapeles',
        description: `El texto "${text}" ha sido copiado al portapapeles.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme: 'blue',
      });
    });
  };

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
          <Heading size="md" paddingBottom="4">
            {name}
          </Heading>
          <Text py="2" bg="red.200">
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
            <Link to={`https://forms.gle/39s6ofcoEgNLgTow8`} target="_blank">
              <Button
                rightIcon={<WarningIcon />}
                variant="solid"
                colorScheme="red"
                onClick={() =>
                  toast({
                    title: 'Muchas gracias',
                    description: 'Tu reporte ha sido enviado con éxito.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                Reportar
              </Button>
            </Link>
            <Button
              leftIcon={<CopyIcon />}
              variant="outline"
              colorScheme="blue"
              onClick={() => copyToClipboard(codINFOBRAS)}
            >
              {codINFOBRAS}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};
