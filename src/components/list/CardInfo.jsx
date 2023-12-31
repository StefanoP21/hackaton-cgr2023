import { InfoIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
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
          type,
          state,
          initialDate,
          finalDate,
          local,
          address,
          amount,
          enterprise,
          ruc,
          person,
          dni,
          cip,
        }) => (
          <Card w={['xs', 'sm']} key={codINFOBRAS} borderRadius="3xl">
            <CardBody>
              <Image
                src={imageURL}
                alt={entity}
                borderRadius="xl"
                w="sm"
                loading="lazy"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{entity}</Heading>
                <Text fontSize="small" textAlign="justify">
                  {name}
                </Text>
                <Text fontSize="2xl" fontWeight={600}>
                  S/. {amount}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                to={`/hackaton-cgr2023/lista/infobra/${codINFOBRAS}?imageURL=${imageURL}&entity=${entity}&name=${name}&amount=${amount}&local=${local}&address=${address}&enterprise=${enterprise}&ruc=${ruc}&person=${person}&dni=${dni}&cip=${cip}&type=${type}&state=${state}&initialDate=${initialDate}&finalDate=${finalDate}`}
                key={codINFOBRAS}
              >
                <Button
                  rightIcon={<InfoIcon />}
                  variant="outline"
                  colorScheme="red"
                >
                  Más información
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      )}
    </>
  );
};
