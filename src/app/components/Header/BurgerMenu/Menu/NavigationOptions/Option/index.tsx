'use client';

import AvailiableRoutingPaths from '@/app/types/routing';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

interface IComponentProps {
  index: number;
  value: string;
  path: AvailiableRoutingPaths;
}

const Option: React.FC<IComponentProps> = ({ path, value, index }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    const visibilityTimerId: NodeJS.Timeout = setTimeout((): void => {
      setIsVisible(true);
      clearTimeout(visibilityTimerId);
    }, 300 * index);
  }, [index]);

  return (
    <div className={styles.relative_container}>
      <div data-path={path} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <Link href={path}>{value}</Link>
      </div>
    </div>
  );
};

export default Option;
