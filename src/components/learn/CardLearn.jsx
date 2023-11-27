import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
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
import { DrawerRegister } from '../register/DrawerRegister';
import { useState } from 'react';

export const CardLearn = ({ courses }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  const handleRegistration = (firstName, lastName, email, password) => {
    if (!firstName || !lastName || !email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    // Aquí es donde manejas el registro del usuario
    // Después de que el usuario se registre, cambia isRegistered a true
    setIsRegistered(true);
    setShowDrawer(false);
  };

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
                to={
                  isRegistered
                    ? `/hackaton-cgr2023/aprendizaje/curso/${codCourse}?title=${title}&videoURL=${videoURL}&quizURL=${quizURL}&topic1=${topic1}&topic2=${topic2}&topic3=${topic3}&content11=${content11}&content12=${content12}&content21=${content21}&content22=${content22}&content31=${content31}&content32=${content32}`
                    : '#'
                }
                key={codCourse}
              >
                <Button
                  leftIcon={isRegistered ? <CheckCircleIcon /> : <InfoIcon />}
                  colorScheme={isRegistered ? 'green' : 'red'}
                  size="md"
                  variant="solid"
                  onClick={toggleDrawer}
                >
                  {isRegistered ? 'Ver curso' : 'Registrarse para ver curso'}
                </Button>
              </Link>
              <DrawerRegister
                isOpen={showDrawer}
                onClose={toggleDrawer}
                onRegister={handleRegistration}
              />
            </CardFooter>
          </Card>
        )
      )}
    </>
  );
};
