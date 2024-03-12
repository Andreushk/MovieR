import Paragraph from '@/components/common/Paragraph';
import styles from './styles.module.css';
import Image from 'next/image';

interface IComponentProps {
  title: string;
  iconPath: string;
}

const TitleWithIcon: React.FC<IComponentProps> = ({ title, iconPath }) => (
  <div className={styles.details_item_title}>
    <Image src={iconPath} alt="icon" />
    <Paragraph type="secondary">{title}</Paragraph>
  </div>
);

export default TitleWithIcon;
