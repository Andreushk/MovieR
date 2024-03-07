'use client';

import { navbarItemsOptions, INavbarItemOption } from './options';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './styles.css';

const NavigationItems: React.FC = () => {
  const pathname: string = usePathname();

  return (
    <nav className="header__navigation">
      {navbarItemsOptions.map(({ displayTitle, path }: INavbarItemOption) => {
        const isActive = pathname === path;

        return (
          <Link
            key={displayTitle}
            href={path}
            className={`header__nav__item ${isActive ? 'selected__header__nav__item' : ''}`}
          >
            {displayTitle}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationItems;
