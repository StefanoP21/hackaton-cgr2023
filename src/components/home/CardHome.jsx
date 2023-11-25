import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';

export const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="2px"
      borderRadius="xl"
      borderColor="red.200"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('red.200', 'red.500')}
        >
          <Icon as={icon} w={10} h={10} />
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
