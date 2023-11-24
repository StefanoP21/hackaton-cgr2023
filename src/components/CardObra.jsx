import { WarningIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const CardObra = () => {
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
        src="https://cdn.www.gob.pe/uploads/document/file/2486159/standard_20211122_122806.jpg.jpg"
        alt="MUNICIPALIDAD DISTRITAL DE HUANTAN"
      />
      <Stack>
        <CardBody paddingBottom={0}>
          <Heading size="sm" paddingBottom="4">
            CREACION DE PAVIMENTO Y ESCALINATAS EN EL CAMINO DE ACCESO AL
            MIRADOR DIOS KAJLLA DISTRITO DE HUANTAN YAUYOS LIMA
          </Heading>
          <Text py="2">
            <b>Entidad:</b> MUNICIPALIDAD DISTRITAL DE HUANTAN
          </Text>
          <Text py="2">
            <b>Modalidad:</b> Administración Directa
          </Text>
          <Text py="2">
            <b>Tipo de obra:</b> Transporte Urbano - Pista y Vereda
          </Text>
          <Text py="2">
            <b>Estado:</b> Finalizado
          </Text>
          <Text py="2">
            <b>Ubicación:</b> LIMA - YAUYOS - HUAÑEC
          </Text>
          <Text py="2">
            <b>Dirección:</b> PLAZA PRINCIPAL S/N HUAÑEC YAUYOS
          </Text>
          <Text py="2">
            <b>Monto aprobado:</b> S/. 235,110.87
          </Text>
        </CardBody>

        <CardFooter>
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
        </CardFooter>
      </Stack>
    </Card>
  );
};
