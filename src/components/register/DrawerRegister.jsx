import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

export const DrawerRegister = ({ isOpen, onClose, onRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const firstField = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const fields = {
      firstName: { value: firstName, error: 'El nombre es requerido' },
      lastName: { value: lastName, error: 'El apellido es requerido' },
      email: { value: email, error: 'El correo es requerido' },
      password: { value: password, error: 'La contraseña es requerida' },
    };

    let newErrors = {};

    for (const [field, { value, error }] of Object.entries(fields)) {
      if (!value) {
        newErrors[field] = error;
      }
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onRegister(firstName, lastName, email, password);
    }
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Registrate</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormControl isRequired isInvalid={errors.firstName}>
                  <FormLabel htmlFor="firstName">Nombres</FormLabel>
                  <Input
                    ref={firstField}
                    type="text"
                    id="firstName"
                    placeholder="Ingresa tus nombres"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired isInvalid={errors.lastName}>
                  <FormLabel htmlFor="lastName">Apellidos</FormLabel>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Ingresa tus apellidos"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Correo</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Contraseña</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={(e) => setPassowrd(e.target.value)}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'solid'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={validateForm}>
              Enviar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
