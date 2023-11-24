import { InfoIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

export const CardInfo = ({ arr }) => {
  return (
    <>
      {arr.map(({ codINFOBRAS, imageURL, title, description, cost }) => (
        <Card w={['xs', 'sm']} key={codINFOBRAS}>
          <CardBody>
            <Image src={imageURL} alt={title} borderRadius="lg" w="sm" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text fontSize="small">{description}</Text>
              <Text color="teal.800" fontSize="2xl">
                {cost}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="4">
              <Button
                rightIcon={<InfoIcon />}
                variant="solid"
                colorScheme="blue"
              >
                Saber más
              </Button>
              <Button
                rightIcon={<WarningIcon />}
                variant="solid"
                colorScheme="red"
              >
                Reportar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
