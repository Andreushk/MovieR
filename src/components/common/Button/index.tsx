import Image from 'next/image';
import styles from './styles.module.css';

type ButtonVariants = 'primary' | 'secondary';

interface IComponentProps {
  value: string;
  type: ButtonVariants;
  iconPath?: string;
  isDisabled?: boolean;
  isSubmit?: boolean;
  clickCB?: () => void;
}

const Button: React.FC<IComponentProps> = ({
  value,
  type,
  iconPath = null,
  isDisabled = false,
  isSubmit = false,
  clickCB,
}) => {
  const stylesClasses: string[] = [styles.button_main];

  if (type === 'primary') stylesClasses.push(styles.primary);
  if (type === 'secondary') stylesClasses.push(styles.secondary);
  if (isDisabled && type === 'primary') stylesClasses.push(styles.primary_disabled);
  if (isDisabled && type === 'secondary') stylesClasses.push(styles.secondary_disabled);
  if (iconPath) stylesClasses.push(styles.with_icon);

  return (
    <button
      className={stylesClasses.join(' ')}
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={clickCB}
    >
      {iconPath && <Image src={iconPath} alt="icon" />}
      {value}
    </button>
  );
};

export default Button;
