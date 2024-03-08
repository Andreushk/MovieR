'use client';

import { navbarItemsOptions } from '@/components/Header/NavigationItems/options';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import Link from 'next/link';

const Links: React.FC = () => {
  const pathname: string = usePathname();

  return (
    <div className={styles.container}>
      {navbarItemsOptions.map((option, i) => {
        return (
          <>
            <Link
              key={option.path}
              href={option.path}
              className={`${styles.navigation_item} ${
                pathname === option.path ? styles.current : ''
              }`}
            >
              {option.displayTitle}
            </Link>
            {i !== navbarItemsOptions.length - 1 && <p>/</p>}
          </>
        );
      })}
    </div>
  );
};

export default Links;
