import styles from './styles.module.css';

type ParagraphVariants = 'primary' | 'secondary';

interface IComponentProps {
  children: string | React.ReactNode;
  type: ParagraphVariants;
}

const Paragraph: React.FC<IComponentProps> = ({ children, type }) => {
  return (
    <p className={`${type === 'primary' ? styles.paragraph_primary : styles.paragraph_secondary}`}>
      {children}
    </p>
  );
};

export default Paragraph;
