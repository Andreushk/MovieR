import styles from './styles.module.css';
import Paragraph from '../Paragraph';

interface IComponentProps {
  message: string;
}

const CenteredMessage: React.FC<IComponentProps> = ({ message }) => (
  <div className={styles.centered_message_container}>
    <Paragraph type="primary">{message}</Paragraph>
  </div>
);

export default CenteredMessage;
