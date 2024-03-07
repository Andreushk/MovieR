import styles from './styles.module.css';

interface IComponentProps {
  children: string;
}

const Paragraph: React.FC<IComponentProps> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export default Paragraph;
