'use client';

import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';
import Message from '../Message';

interface IComponentProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
}

const HookFormTextarea: React.FC<IComponentProps> = ({
  register,
  name,
  label,
  placeholder,
  error,
}) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor="message">
      {label}
    </label>
    <textarea
      {...register(name, { required: true })}
      placeholder={placeholder}
      className={styles.textarea}
      id="message"
    />
    <Message errorMessage={error} />
  </div>
);

export default HookFormTextarea;
