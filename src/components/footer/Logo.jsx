import { Box, Text } from '@chakra-ui/react';
import svg from '../../assets/jamstack-w.svg';

export const Logo = ({ title }) => {
  return (
    <Box display="flex" alignItems="center">
      <img src={svg} alt="logo" width="30px" />
      <Text fontSize="2xl" fontWeight="bold" color="white" marginStart={2}>
        {title}
      </Text>
    </Box>
  );
};
