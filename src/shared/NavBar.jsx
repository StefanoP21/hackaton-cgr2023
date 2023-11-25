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
    to: '/inicio',
  },
  {
    label: 'Obras',
    to: '/lista',
  },
  {
    label: 'Capacítate',
    to: '/aprendizaje',
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
