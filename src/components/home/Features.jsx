import {
  StarIcon,
  QuestionIcon,
  ViewIcon,
  ChatIcon,
  TimeIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Card } from './CardHome';

const features = [
  {
    key: 1,
    heading: 'Heading',
    description: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    icon: StarIcon,
  },
  {
    key: 2,
    heading: 'Heading',
    description: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    icon: ViewIcon,
  },
  {
    key: 3,
    heading: 'Heading',
    description: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    icon: QuestionIcon,
  },
];

export const Features = () => {
  return (
    <Container maxW={'8xl'} padding={10} bg="gray.50">
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
            ejecutando con normalidad y que nos ayudes a reportarlas para que se
            tomen las medidas correctivas.
          </Text>
        </Stack>

        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {features.map(({ key, heading, description, icon }) => {
              return (
                <Card
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
  );
};
