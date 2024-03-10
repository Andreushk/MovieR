import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const TOOLTIP_TEXT = 'You have to read it first ;)';

const Tooltip: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>{TOOLTIP_TEXT}</div>
  );
};

export default Tooltip;
