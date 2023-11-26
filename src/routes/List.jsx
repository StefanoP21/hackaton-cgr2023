import { Search2Icon, ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Container,
  SimpleGrid,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CardSelect, CardInfo } from '../components/list';
import departmentsPeru from '../data/departmentsPeru.json';
import provincesLima from '../data/provincesLima.json';
import citiesYauyos from '../data/citiesYauyos.json';
import obras from '../data/obras.json';
import { useState } from 'react';

export const List = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [filteredObras, setFilteredObras] = useState(obras);

  const handleSearch = () => {
    if (selectedDistrict) {
      const filtered = obras.filter(
        (obra) => obra.cityID === Number(selectedDistrict)
      );
      setFilteredObras(filtered);
    } else {
      setFilteredObras(obras);
    }
  };

  return (
    <Container maxWidth="8xl" padding={10}>
      <Link to="/hackaton-cgr2023/inicio">
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
        Obras para la Reconstrucción con Cambios 2023
      </Heading>
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <CardSelect
          title="Departamento"
          items={departmentsPeru}
          onSelect={() => {}}
        />
        <CardSelect
          title="Provincia"
          items={provincesLima}
          onSelect={() => {}}
        />
        <CardSelect
          title="Distrito"
          items={citiesYauyos}
          onSelect={setSelectedDistrict}
        />
      </SimpleGrid>
      <Button
        leftIcon={<Search2Icon />}
        colorScheme="red"
        size="md"
        variant="solid"
        marginTop={5}
        onClick={handleSearch}
      >
        Buscar Obras
      </Button>
      <Divider marginY={10} />
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <CardInfo items={filteredObras} />
      </SimpleGrid>
    </Container>
  );
};
