'use client';

import MenuIcon from '@/app/assets/images/icons/Menu.svg';
import styles from './styles.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';

const BurgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuIconClick = (): void => {
    setIsMenuOpen(true);
  };

  const handleCloseMenuIconClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.menu_button_container} onClick={handleMenuIconClick}>
        <Image src={MenuIcon} alt="menu" />
      </div>
      {isMenuOpen && <Menu closeCB={handleCloseMenuIconClick} />}
    </>
  );
};

export default BurgerMenu;
