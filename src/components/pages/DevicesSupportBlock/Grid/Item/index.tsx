import { ISupportableDevice } from '@/constants/supportableDevices';
import Paragraph from '@/components/common/Paragraph';
import styles from './styles.module.css';
import Image from 'next/image';

const Item: React.FC<ISupportableDevice> = ({ svgPath, title, description, alt }) => {
  return (
    <div className={styles.item_container}>
      <div className={styles.item_title}>
        <Image src={svgPath} alt={alt} />
        <h2>{title}</h2>
      </div>
      <Paragraph type="secondary">{description}</Paragraph>
    </div>
  );
};

export default Item;
