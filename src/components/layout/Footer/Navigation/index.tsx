import Logo from '@/components/common/Logo';
import styles from './styles.module.css';
import Links from './Links';

const Navigation: React.FC = () => (
  <div className={styles.information_container}>
    <Logo />
    <Links />
  </div>
);

export default Navigation;
