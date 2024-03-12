import { HookFromTextarea } from '@/components/common';
import ContactFormDataType from '@/types/contactForm';
import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';
import React from 'react';

const MESSAGE_TEXTAREA_LABEL = 'Message';
const MESSAGE_TEXTAREA_PLACEHOLDER = 'Enter message...';

interface IComponentProps {
  error?: string | undefined;
  inputsRegister: UseFormRegister<ContactFormDataType>;
}

const MessagePart: React.FC<IComponentProps> = ({ error, inputsRegister }) => (
  <div className={styles.container}>
    <HookFromTextarea
      register={inputsRegister}
      name="message"
      label={MESSAGE_TEXTAREA_LABEL}
      placeholder={MESSAGE_TEXTAREA_PLACEHOLDER}
      error={error}
    />
  </div>
);

export default React.memo(MessagePart);
