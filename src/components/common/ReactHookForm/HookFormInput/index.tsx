'use client';

import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';
import Message from '../Message';

type InputTypes = 'email' | 'password' | 'text';

interface IComponentProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  placeholder: string;
  type?: InputTypes;
  error?: string;
}

const HookFormInput: React.FC<IComponentProps> = ({
  register,
  name,
  label,
  placeholder,
  type = 'text',
  error,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        {...register(name, { required: true })}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
      <Message errorMessage={error} />
    </div>
  );
};

export default HookFormInput;
