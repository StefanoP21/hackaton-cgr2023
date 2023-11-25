import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize={25} mt={3} mb={2}>
        Página no encontrada
      </Text>
      <Text color={'gray.500'} fontSize={20} mb={6}>
        La página que estás buscando no existe o no se encuentra disponible.
      </Text>

      <Link to="/hackaton-cgr2023/inicio">
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Volver al inicio
        </Button>
      </Link>
    </Box>
  );
};
