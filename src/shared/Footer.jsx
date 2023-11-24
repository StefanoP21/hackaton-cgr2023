import { PhoneIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Logo, SocialButton } from '../components/footer';

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('red.500')} color={useColorModeValue('white')}>
      <Container
        as={Stack}
        maxW={'8xl'}
        py={8}
        px={10}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo title="EcoHackers" />
        <Text>© 2023 Hackathon. Stefano Palomino</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Phone'} href={'tel:+51987052642'}>
            <PhoneIcon />
          </SocialButton>
          <SocialButton label={'Email'} href={'mailto:aldair112012@outlook.es'}>
            <EmailIcon />
          </SocialButton>
          <SocialButton
            label={'Infobras'}
            href={'https://infobras.contraloria.gob.pe/infobrasweb'}
          >
            <ExternalLinkIcon />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
