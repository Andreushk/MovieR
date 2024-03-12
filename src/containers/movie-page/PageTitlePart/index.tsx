import { Title } from '@/components/common';
import styles from './styles.module.css';

interface IComponentProps {
  title: string;
}

const PageTitlePart: React.FC<IComponentProps> = ({ title }) => (
  <div className={styles.page_title}>
    <Title>{title}</Title>
  </div>
);

export default PageTitlePart;
