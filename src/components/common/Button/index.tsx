import styles from './styles.module.css';
import Image from 'next/image';

type ButtonVariants = 'primary' | 'secondary';

interface IComponentProps {
  value: string;
  type: ButtonVariants;
  iconPath?: string;
  clickCB?: () => void;
}

const Paragraph: React.FC<IComponentProps> = ({ value, type, iconPath = null, clickCB }) => {
  const stylesClasses: string[] = [styles.button_main];

  if (type === 'primary') stylesClasses.push(styles.primary);
  if (type === 'secondary') stylesClasses.push(styles.primary);
  if (iconPath) stylesClasses.push(styles.with_icon);

  return (
    <button className={stylesClasses.join(' ')} type="button" onClick={clickCB}>
      {iconPath && <Image src={iconPath} alt="icon" />}
      {value}
    </button>
  );
};

export default Paragraph;
