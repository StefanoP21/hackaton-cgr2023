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
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

export const DrawerRegister = ({ isOpen, onClose, onRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const firstField = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const handleButtonClick = () => {
    onRegister(firstName, lastName, email, password);
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
                <FormControl isRequired>
                  <FormLabel htmlFor="firstName">Nombres</FormLabel>
                  <Input
                    ref={firstField}
                    type="text"
                    id="firstName"
                    placeholder="Ingresa tus nombres"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="lastName">Apellidos</FormLabel>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Ingresa tus apellidos"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Correo</FormLabel>
                  <InputGroup>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Ingresa tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired>
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
                </FormControl>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={handleButtonClick}>
              Enviar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
