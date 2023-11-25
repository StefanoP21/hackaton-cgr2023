import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <Container maxW={'8xl'} paddingX={10}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
      >
        <Heading
          fontWeight={800}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          FORMA PARTE DEL{' '}
          <Text as={'span'} color={'red.600'}>
            CONTROL!
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontWeight={600}>
          La información de las obras públicas que se ejecutan en tu localidad
          al lacance de tus manos; empodérate y participa en la toma de
          decisiones de tu comunidad.
        </Text>

        <Link to="/hackaton-cgr2023/lista">
          <Button
            rounded={'full'}
            p={6}
            colorScheme={'red'}
            bg={'red.600'}
            _hover={{ bg: 'red.800' }}
            fontSize={20}
          >
            Realizar búsqueda
          </Button>
        </Link>
      </Stack>
      <Flex w={'full'}></Flex>
    </Container>
  );
};
