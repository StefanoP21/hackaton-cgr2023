import { useState } from 'react';
import {
  Logo,
  NavBarContainer,
  MenuToggle,
  MenuLinks,
} from '../components/navbar';
import { Button } from '@chakra-ui/react';

const items = [
  {
    label: 'Inicio',
    to: '/hackaton-cgr2023/inicio',
  },
  {
    label: 'Obras',
    to: '/hackaton-cgr2023/lista',
  },
  {
    label: 'Capacítate',
    to: '/hackaton-cgr2023/aprendizaje',
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div style={{ background: '#C53030' }}>
      <NavBarContainer>
        <Logo title="APUCHAY" />
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} items={items} />
      </NavBarContainer>
    </div>
  );
};
