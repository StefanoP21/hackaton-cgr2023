import { StarIcon, QuestionIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { CardHome } from './CardHome';

const features = [
  {
    key: 1,
    heading: 'Fomentar la Participación Ciudadana',
    description:
      'Buscamos incrementar la participación de la comunidad en la supervisión y evaluación de proyectos en construcción. Empoderamos a los ciudadanos para que sean partícipes en el proceso, compartan sus observaciones, y contribuyan con su experiencia.',
    icon: StarIcon,
  },
  {
    key: 2,
    heading: 'Mejorar la Transparencia de los Proyectos ',
    description:
      'Garantizamos un acceso claro y comprensible a información detallada sobre presupuestos, plazos y progresos en proyectos de construcción. Nos esforzamos por ofrecer datos actualizados y precisos, promoviendo la transparencia en la gestión de fondos públicos.',
    icon: ViewIcon,
  },
  {
    key: 3,
    heading: 'Fortalecer la Resiliencia Comunitaria',
    description:
      'Facilitamos la respuesta proactiva de la comunidad ante posibles riesgos asociados al Fenómeno del Niño. Buscamos proporcionar alertas tempranas, información relevante y recursos educativos para que las comunidades estén mejor preparadas.',
    icon: QuestionIcon,
  },
];

export const Features = () => {
  return (
    <div style={{ background: '#F7FAFC' }}>
      <Container maxW={'8xl'} padding={10}>
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
            <Heading
              fontSize={{ base: '2xl', sm: '4xl' }}
              fontWeight={'bold'}
              mb={5}
            >
              Nuestro Objetivo
            </Heading>
            <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
              Queremos que tengas toda la información de las obras públicas de
              prevención del fenómeno del niño que se vienen ejecutando en tu
              localidad. Además, queremos que detectes las obras que no se están
              ejecutando con normalidad y que nos ayudes a reportarlas para que
              se tomen las medidas correctivas.
            </Text>
          </Stack>

          <Container maxW={'5xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {features.map(({ key, heading, description, icon }) => {
                return (
                  <CardHome
                    key={key}
                    heading={heading}
                    description={description}
                    icon={icon}
                  />
                );
              })}
            </Flex>
          </Container>
        </Box>
      </Container>
    </div>
  );
};
