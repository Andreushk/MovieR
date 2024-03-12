import TitleWithIcon from '../../TitleWithIcon';
import styles from './styles.module.css';
import Paragraph from '../../Paragraph';

interface IComponentProps {
  title: string;
  text: string;
  iconPath: string;
}

const Item: React.FC<IComponentProps> = ({ title, text, iconPath }) => (
  <div className={styles.details_item}>
    <TitleWithIcon title={title} iconPath={iconPath} />
    <Paragraph type="primary">{text}</Paragraph>
  </div>
);

export default Item;
