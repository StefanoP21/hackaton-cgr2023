import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ to, label }) => {
  return (
    <Link to={to}>
      <Text
        display="block"
        fontSize="xl"
        fontWeight="600"
        _hover={{ bg: 'red.800', px: '2', rounded: 'md' }}
      >
        {label}
      </Text>
    </Link>
  );
};
