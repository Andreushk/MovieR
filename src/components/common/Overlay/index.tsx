'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface IComponentProps {
  children: React.ReactNode;
}

const Overlay: React.FC<IComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  return <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}>{children}</div>;
};

export default Overlay;
