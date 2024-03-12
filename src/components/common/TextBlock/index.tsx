import TitleWithIcon from '../TitleWithIcon';
import styles from './styles.module.css';
import Paragraph from '../Paragraph';

interface IComponentProps {
  title: string;
  text: string;
  iconPath: string;
  isJustified?: boolean;
}

const TextBlock: React.FC<IComponentProps> = ({ title, text, iconPath, isJustified = false }) => (
  <div className={`${styles.text_block} ${isJustified && styles.justified}`}>
    <TitleWithIcon title={title} iconPath={iconPath} />
    <Paragraph type="primary">{text}</Paragraph>
  </div>
);

export default TextBlock;
