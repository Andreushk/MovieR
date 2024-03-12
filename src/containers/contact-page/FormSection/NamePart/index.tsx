import ContactFormDataType from '@/types/contactForm';
import { HookFormInput } from '@/components/common';
import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';
import React from 'react';

const FIRST_NAME_FIELD_LABEL = 'First Name';
const LAST_NAME_FIELD_LABEL = 'Last Name';

const FIRST_NAME_FIELD_PLACEHOLDER = 'Enter first name...';
const LAST_NAME_FIELD_PLACEHOLDER = 'Enter last name...';

interface IComponentProps {
  firstNameError: string | undefined;
  lastNameError: string | undefined;
  inputsRegister: UseFormRegister<ContactFormDataType>;
}

const NamePart: React.FC<IComponentProps> = ({ firstNameError, lastNameError, inputsRegister }) => (
  <div className={styles.container}>
    <div className={styles.input_wrapper}>
      <HookFormInput
        register={inputsRegister}
        name="firstName"
        label={FIRST_NAME_FIELD_LABEL}
        placeholder={FIRST_NAME_FIELD_PLACEHOLDER}
        error={firstNameError}
      />
    </div>
    <div className={styles.input_wrapper}>
      <HookFormInput
        register={inputsRegister}
        name="lastName"
        label={LAST_NAME_FIELD_LABEL}
        placeholder={LAST_NAME_FIELD_PLACEHOLDER}
        error={lastNameError}
      />
    </div>
  </div>
);

export default React.memo(NamePart);
