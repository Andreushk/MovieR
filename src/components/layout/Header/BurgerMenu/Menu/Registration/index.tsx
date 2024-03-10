'use client';

import navbarItemsOptions from '@/constants/navigationOptions';
import { Button } from '@/components/common';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const SIGNUP_BUTTON = 'Sign up';
const LOGIN_BUTTON = 'Log in';

interface IComponentProps {
  closeMenuCB: () => void;
}

const Registration: React.FC<IComponentProps> = ({ closeMenuCB }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    const visibilityTimerId = setTimeout((): void => {
      setIsVisible(true);
      clearTimeout(visibilityTimerId);
    }, (navbarItemsOptions.length - 1) * 300);
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <Button type="primary" value={LOGIN_BUTTON} clickCB={closeMenuCB}></Button>
      <Button type="primary" value={SIGNUP_BUTTON} clickCB={closeMenuCB}></Button>
    </div>
  );
};

export default Registration;
