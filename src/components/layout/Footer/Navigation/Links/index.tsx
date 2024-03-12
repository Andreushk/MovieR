'use client';

import navbarItemsOptions from '@/constants/navigationOptions';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import Link from 'next/link';
import React from 'react';

const Links: React.FC = () => {
  const pathname: string = usePathname();

  return (
    <div className={styles.container}>
      {navbarItemsOptions.map((option, i) => (
        <React.Fragment key={option.path}>
          <Link
            href={option.path}
            className={`${styles.navigation_item} ${
              pathname === option.path ? styles.current : ''
            }`}
          >
            {option.displayTitle}
          </Link>
          {i !== navbarItemsOptions.length - 1 && <p>/</p>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Links;
