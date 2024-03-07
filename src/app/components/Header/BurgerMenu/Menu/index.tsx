'use client';

import NavigationOptions from './NavigationOptions';
import { useEffect, useState } from 'react';
import Registration from './Registration';
import styles from './styles.module.css';
import Title from './Title';

interface IComponentsProps {
  closeCB: () => void;
}

const Menu: React.FC<IComponentsProps> = ({ closeCB }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  const handleCrossIconClick = (): void => {
    setIsVisible(false);

    const closeTimerId = setTimeout((): void => {
      closeCB();
      clearTimeout(closeTimerId);
    }, 300);
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <Title crossIconClickCB={handleCrossIconClick} />
      <NavigationOptions />
      <Registration />
    </div>
  );
};

export default Menu;
