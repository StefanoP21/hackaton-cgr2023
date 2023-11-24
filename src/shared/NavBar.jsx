import { useState } from 'react';
import {
  Logo,
  NavBarContainer,
  MenuToggle,
  MenuLinks,
} from '../components/navbar';

const items = [
  {
    label: 'Inicio',
    to: '/',
  },
  {
    label: 'Lista',
    to: '/lista',
  },
  {
    label: 'Aprendizaje',
    to: '/aprendizaje',
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div style={{ background: '#E53E3E' }}>
      <NavBarContainer>
        <Logo title="EcoHackers" />
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} items={items} />
      </NavBarContainer>
    </div>
  );
};
