import NavigationItems from './NavigationItems';
import RegistrationButtons from './RegistrationButtons';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <NavigationItems />
      <RegistrationButtons />
      <BurgerMenu />
    </header>
  );
};

export default React.memo(Header);
