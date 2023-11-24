import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ to, label }) => {
  return (
    <Link to={to}>
      <Text display="block" fontSize="xl" fontWeight="600">
        {label}
      </Text>
    </Link>
  );
};
