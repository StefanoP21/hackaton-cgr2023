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
import { Link } from 'react-router-dom';

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
              <Link to={`/infobras/${codINFOBRAS}`}>
                <Button
                  rightIcon={<InfoIcon />}
                  variant="solid"
                  colorScheme="blue"
                >
                  Saber más
                </Button>
              </Link>
              {/* TODO: Add link to report */}
              <Link
                to={`https://github.com/StefanoP21/hackaton-cgr2023`}
                target="_blank"
              >
                <Button
                  rightIcon={<WarningIcon />}
                  variant="solid"
                  colorScheme="red"
                >
                  Reportar
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
