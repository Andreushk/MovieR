import { Paragraph, Title } from '@/components/common';
import styles from './styles.module.css';

interface IComponentProps {
  title: string;
  text: string;
}

const Article: React.FC<IComponentProps> = ({ title, text }) => {
  return (
    <div className={styles.article_container}>
      <Title>{title}</Title>
      <Paragraph type="secondary">{text}</Paragraph>
    </div>
  );
};

export default Article;
