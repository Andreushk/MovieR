import { INTRODUCTION, TITLE } from '@/constants/personalDataNotice';
import styles from './styles.module.css';
import Title from '../../Title';

const TitlePart: React.FC = () => (
  <div className={styles.modal_title_container}>
    <Title>{TITLE}</Title>
    <p>{INTRODUCTION}</p>
  </div>
);

export default TitlePart;
