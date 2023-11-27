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
      {courses.map(
        ({
          codCourse,
          imageURL,
          title,
          description,
          videoURL,
          quizURL,
          topic1,
          topic2,
          topic3,
          content11,
          content12,
          content21,
          content22,
          content31,
          content32,
        }) => (
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
                to={`/hackaton-cgr2023/aprendizaje/curso/${codCourse}?title=${title}&videoURL=${videoURL}&quizURL=${quizURL}&topic1=${topic1}&topic2=${topic2}&topic3=${topic3}&content11=${content11}&content12=${content12}&content21=${content21}&content22=${content22}&content31=${content31}&content32=${content32}`}
                key={codCourse}
              >
                <Button
                  leftIcon={<InfoIcon />}
                  colorScheme="red"
                  size="md"
                  variant="solid"
                >
                  Inicia aquí
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      )}
    </>
  );
};
