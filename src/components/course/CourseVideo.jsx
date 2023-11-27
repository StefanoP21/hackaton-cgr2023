import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AspectRatio, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const CourseVideo = ({ title, videoURL, quizURL }) => {
  return (
    <>
      <Heading
        size="lg"
        color="red.600"
        border="solid"
        borderRadius="10px"
        padding={4}
      >
        {title}
      </Heading>
      <AspectRatio maxW="650px" ratio={2} my={10}>
        <iframe title={title} src={videoURL} allowFullScreen />
      </AspectRatio>
      <Button
        rightIcon={<ExternalLinkIcon />}
        variant="solid"
        colorScheme="red"
      >
        Tomar evaluación
      </Button>
    </>
  );
};
