import styles from './styles.module.css';

interface IComponentProps {
  children: string;
}

const Title: React.FC<IComponentProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
