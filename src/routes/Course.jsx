import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Button, Container, GridItem, SimpleGrid } from '@chakra-ui/react';
import { CourseAccordion, CourseVideo } from '../components/course';
import { Link, useLocation, useParams } from 'react-router-dom';

export const Course = () => {
  const { codCourse } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const paramNames = [
    'title',
    'videoURL',
    'quizURL',
    'topic1',
    'topic2',
    'topic3',
    'content11',
    'content12',
    'content21',
    'content22',
    'content31',
    'content32',
  ];

  const paramValues = paramNames.reduce((obj, paramName) => {
    obj[paramName] = params.get(paramName);
    return obj;
  }, {});

  const {
    title,
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
  } = paramValues;

  return (
    <Container maxWidth="8xl" padding={10}>
      <Link to="/hackaton-cgr2023/aprendizaje">
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="gray"
          size="md"
          variant="outline"
          marginBottom={10}
        >
          Regresar
        </Button>
      </Link>
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <GridItem>
          <CourseAccordion
            topic1={topic1}
            topic2={topic2}
            topic3={topic3}
            content11={content11}
            content12={content12}
            content21={content21}
            content22={content22}
            content31={content31}
            content32={content32}
          />
        </GridItem>
        <GridItem>
          <CourseVideo title={title} videoURL={videoURL} quizURL={quizURL} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
