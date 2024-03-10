import navbarItemsOptions from '@/constants/navigationOptions';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import Option from './Option';

interface IComponentProps {
  closeMenuCB: () => void;
}

const NavigationOptions: React.FC<IComponentProps> = ({ closeMenuCB }) => {
  const router = useRouter();

  const handleNavigationPartClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const clickedElement = event.target as HTMLDivElement;
    const closestParentWithDataPath = clickedElement.closest('[data-path]');

    if (closestParentWithDataPath) {
      const path: string | null = closestParentWithDataPath.getAttribute('data-path');
      if (path) router.push(path);
      closeMenuCB();
    }
  };

  return (
    <div className={styles.container} onClick={handleNavigationPartClick}>
      {navbarItemsOptions.map(({ path, displayTitle }, i) => (
        <Option key={path} path={path} value={displayTitle} index={i + 1} />
      ))}
    </div>
  );
};

export default NavigationOptions;
