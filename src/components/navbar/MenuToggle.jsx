import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Icon } from '@chakra-ui/react';

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', sm: 'none' }} onClick={toggle}>
      {isOpen ? (
        <Icon as={CloseIcon} />
      ) : (
        <Icon as={HamburgerIcon} boxSize={6} />
      )}
    </Box>
  );
};
