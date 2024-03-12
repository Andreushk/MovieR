import { personalDataStructure } from '@/constants/personalDataNotice';
import styles from './styles.module.css';
import Article from './Article';

const TextBlockPart: React.FC = () => (
  <div className={styles.modal_text_block}>
    {personalDataStructure.map(({ title, text }) => (
      <Article key={title} title={title} text={text} />
    ))}
  </div>
);

export default TextBlockPart;
