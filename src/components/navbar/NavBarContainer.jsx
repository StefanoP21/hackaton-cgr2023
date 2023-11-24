import { Container, Flex } from '@chakra-ui/react';

export const NavBarContainer = ({ children }) => {
  return (
    <Container maxWidth="8xl" paddingX={10}>
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        wrap="wrap"
        width="100%"
        paddingY={10}
        color="white"
      >
        {children}
      </Flex>
    </Container>
  );
};
