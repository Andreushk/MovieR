'use client';

import navbarItemsOptions from '@/constants/navigationOptions';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const SIGNUP_BUTTON = 'Sign up';
const LOGIN_BUTTON = 'Log in';

const Registration: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    const visibilityTimerId = setTimeout((): void => {
      setIsVisible(true);
      clearTimeout(visibilityTimerId);
    }, (navbarItemsOptions.length - 1) * 300);
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <button>{LOGIN_BUTTON}</button>
      <button>{SIGNUP_BUTTON}</button>
    </div>
  );
};

export default Registration;
