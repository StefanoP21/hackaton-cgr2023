import { Box, Text } from '@chakra-ui/react';
import svg from '../../assets/jamstack-w.svg';

export const Logo = ({ title }) => {
  return (
    <Box display="flex">
      <img src={svg} alt="logo" width="40px" />
      <Text fontSize="4xl" fontWeight="bold" color="white" marginStart={2}>
        {title}
      </Text>
    </Box>
  );
};
