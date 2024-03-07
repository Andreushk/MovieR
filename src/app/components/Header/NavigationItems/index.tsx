'use client';

import { navbarItemsOptions, INavbarItemOption } from './options';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import Link from 'next/link';

const NavigationItems: React.FC = () => {
  const pathname: string = usePathname();

  return (
    <nav className={styles.nav_container}>
      {navbarItemsOptions.map(({ displayTitle, path }: INavbarItemOption) => {
        const isActive = pathname === path;

        return (
          <Link
            key={displayTitle}
            href={path}
            className={`${styles.item} ${isActive ? styles.selected_item : ''}`}
          >
            {displayTitle}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationItems;
