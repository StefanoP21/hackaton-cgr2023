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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DrawerRegister } from '../register/DrawerRegister';
import { useEffect, useState } from 'react';

export const CardLearn = ({ courses }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registeredUser = localStorage.getItem('user');
    const registered = localStorage.getItem('isRegistered');
    if (registeredUser) {
      setUser(JSON.parse(registeredUser));
    }
    if (registered) {
      setIsRegistered(JSON.parse(registered));
    }
  }, []);

  const toggleDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  const handleRegistration = (firstName, lastName, email, password) => {
    const newUser = { firstName, lastName, email, password };
    setUser(newUser);
    setIsRegistered(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('isRegistered', true);
    setShowDrawer(false);
    setShowModal(true);
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
      <Modal
        isOpen={showModal}
        size={{ base: 'xs', md: 'sm' }}
        isCentered
        onClose={() => setShowModal(false)}
      >
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white" p={2}>
          <ModalHeader fontSize="xl" fontWeight="bold">
            Registro exitoso
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            {user
              ? `¡Hola, ${user.firstName}! Te has registrado con éxito.`
              : 'Te has registrado con éxito!'}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
