import NavigationItems from './NavigationItems';
import Account from './Account';
import Logo from './Logo';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <NavigationItems />
      <Account />
    </header>
  );
};

export default React.memo(Header);
