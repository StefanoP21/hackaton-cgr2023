import { Box, Stack } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';

export const MenuLinks = ({ isOpen, items }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', sm: 'block' }}
      flexBasis={{ base: '100%', sm: 'auto' }}
    >
      <Stack
        spacing={5}
        align="center"
        justify={['center', 'space-between', 'flex-end']}
        direction={['column', 'row']}
        paddingTop={[8, 4, 0]}
      >
        {items.map(({ to, label }) => (
          <MenuItem to={to} key={label} label={label}>
            {label}
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
};
