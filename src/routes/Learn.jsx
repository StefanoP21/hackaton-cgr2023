import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { CardLearn } from '../components/learn';
import courses from '../data/courses.json';

export const Learn = () => {
  return (
    <Container maxWidth="8xl" padding={10}>
      <Heading
        size="xl"
        marginBottom={10}
        color="red.600"
        textAlign="center"
        textTransform="uppercase"
      >
        ¡Capacítate con nosotros!
      </Heading>
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <CardLearn courses={courses} />
      </SimpleGrid>
    </Container>
  );
};
