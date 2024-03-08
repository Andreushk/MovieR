import Image from 'next/image';
import styles from './styles.module.css';

const LOGO_ALT = 'application logo';

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src={'/logo/logo.svg'} width={157} height={55} alt={LOGO_ALT} priority />
    </div>
  );
};

export default Logo;
