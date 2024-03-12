import supportableDevices from '@/constants/supportableDevices';
import styles from './styles.module.css';
import Item from './Item';

const Grid: React.FC = () => (
  <div className={styles.grid}>
    {supportableDevices.map(({ svgPath, title, description, alt }) => (
      <Item key={title} svgPath={svgPath} title={title} description={description} alt={alt} />
    ))}
  </div>
);

export default Grid;
