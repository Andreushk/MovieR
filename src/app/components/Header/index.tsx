import RegistrationButtons from './RegistrationButtons';
import NavigationItems from './NavigationItems';
import styles from './styles.module.css';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavigationItems />
      <RegistrationButtons />
      <BurgerMenu />
    </header>
  );
};

export default React.memo(Header);
