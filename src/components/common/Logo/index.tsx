'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const LOGO_ALT = 'application logo';

const Logo: React.FC = () => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push('/');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Image src={'/logo/logo.svg'} width={157} height={55} alt={LOGO_ALT} priority />
    </div>
  );
};

export default Logo;
