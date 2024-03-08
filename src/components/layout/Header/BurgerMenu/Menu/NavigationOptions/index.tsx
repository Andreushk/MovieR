import navbarItemsOptions from '@/constants/navigationOptions';
import styles from './styles.module.css';
import Option from './Option';

const NavigationOptions: React.FC = () => {
  return (
    <div className={styles.container}>
      {navbarItemsOptions.map(({ path, displayTitle }, i) => (
        <Option key={path} path={path} value={displayTitle} index={i + 1} />
      ))}
    </div>
  );
};

export default NavigationOptions;
