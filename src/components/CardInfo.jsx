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

export const CardInfo = ({ items }) => {
  return (
    <>
      {items.map(
        ({
          codINFOBRAS,
          imageURL,
          name,
          entity,
          modality,
          type,
          state,
          local,
          address,
          amount,
          enterprise,
          ruc,
          person,
          dni,
          cip,
        }) => (
          <Card w={['xs', 'sm']} key={codINFOBRAS}>
            <CardBody>
              <Image src={imageURL} alt={entity} borderRadius="lg" w="sm" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{entity}</Heading>
                <Text fontSize="small">{name}</Text>
                <Text color="teal.800" fontSize="2xl">
                  S/. {amount}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="6">
                {/* TODO: Add link to report */}
                <Link
                  to={`/lista/infobra/${codINFOBRAS}?imageURL=${imageURL}&entity=${entity}&name=${name}&amount=${amount}&local=${local}&address=${address}&enterprise=${enterprise}&ruc=${ruc}&person=${person}&dni=${dni}&cip=${cip}&modality=${modality}&type=${type}&state=${state}`}
                  key={codINFOBRAS}
                >
                  <Button
                    rightIcon={<InfoIcon />}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Saber más
                  </Button>
                </Link>
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
        )
      )}
    </>
  );
};
