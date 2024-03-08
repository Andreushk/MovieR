import styles from './styles.module.css';

type ButtonVariants = 'primary' | 'secondary';

interface IComponentProps {
  value: string;
  type: ButtonVariants;
  clickCB?: () => void;
}

const Paragraph: React.FC<IComponentProps> = ({ value, type, clickCB }) => {
  return (
    <button
      className={` ${styles.button_main} ${type === 'primary' ? styles.primary : styles.secondary}`}
      type="button"
      onClick={clickCB}
    >
      {value}
    </button>
  );
};

export default Paragraph;
