'use client';

import LogoIcon from '@/assets/images/icons/logo.svg';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import Image from 'next/image';

const LOGO_ALT = 'application logo';

const Logo: React.FC = () => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push('/');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Image src={LogoIcon} alt={LOGO_ALT} priority />
    </div>
  );
};

export default Logo;
