import { InfoIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const CardLearn = ({ courses }) => {
  return (
    <>
      {courses.map(({ codCourse, imageURL, title, description }) => (
        <Card w={['xs', 'sm']} key={codCourse} borderRadius="3xl">
          <CardBody>
            <Image src={imageURL} alt={title} borderRadius="xl" w="sm" />
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign="center" textTransform="uppercase">
                {title}
              </Heading>
              <Text fontSize="small" textAlign="justify">
                {description}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <Link
              to={`/hackaton-cgr2023/aprendizaje/curso/${codCourse}`}
              key={codCourse}
            >
              <Button
                leftIcon={<InfoIcon />}
                colorScheme="red"
                size="md"
                variant="solid"
              >
                Inicia Aquí
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
