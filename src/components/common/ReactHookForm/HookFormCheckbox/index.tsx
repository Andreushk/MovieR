import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';

interface IComponentProps {
  name: string;
  isDisabled: boolean;
  register: UseFormRegister<any>;
  disabledCheckboxClickCB: () => void;
}

const HookFormCheckbox: React.FC<IComponentProps> = ({
  isDisabled,
  name,
  register,
  disabledCheckboxClickCB,
}) => {
  const handleClick = (): void => {
    if (isDisabled) {
      disabledCheckboxClickCB();
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <label className={styles.label}>
        <input
          {...register(name, { validate: (value) => value === true })}
          type="checkbox"
          disabled={isDisabled}
          className={styles.input}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default HookFormCheckbox;
