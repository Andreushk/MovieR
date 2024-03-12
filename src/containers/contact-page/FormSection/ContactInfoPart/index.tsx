import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import PhoneField from '@/components/common/ReactHookForm/PhoneField';
import ContactFormDataType from '@/types/contactForm';
import { HookFormInput } from '@/components/common';
import styles from './styles.module.css';
import React from 'react';

const EMAIL_ADDRESS_FIELD_LABEL = 'Email Address';
const PHONE_NUMBER_FIELD_LABEL = 'Phone Number';

const EMAIL_ADDRESS_FIELD_PLACEHOLDER = 'Enter email address...';
const PHONE_NUMBER_FIELD_PLACEHOLDER = 'Enter phone number...';

const INVALID_PHONE_NUMBER_ERROR = 'Invalid phone number';

interface IComponentProps {
  phoneInputValue: string | undefined;
  emailInputError: string | undefined;
  isPhoneNumberError: boolean;
  setValue: UseFormSetValue<ContactFormDataType>;
  inputsRegister: UseFormRegister<ContactFormDataType>;
}

const ContactInfoPart: React.FC<IComponentProps> = ({
  inputsRegister,
  setValue,
  isPhoneNumberError,
  emailInputError,
  phoneInputValue,
}) => {
  const handleNewPhoneValue = (newValue: string): void => {
    setValue('phoneNumber', newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_wrapper}>
        <HookFormInput
          register={inputsRegister}
          name="emailAddress"
          label={EMAIL_ADDRESS_FIELD_LABEL}
          placeholder={EMAIL_ADDRESS_FIELD_PLACEHOLDER}
          error={emailInputError}
          type="email"
        />
      </div>
      <div className={styles.input_wrapper}>
        <PhoneField
          label={PHONE_NUMBER_FIELD_LABEL}
          placeholder={PHONE_NUMBER_FIELD_PLACEHOLDER}
          value={phoneInputValue}
          changeCB={handleNewPhoneValue}
          error={isPhoneNumberError ? INVALID_PHONE_NUMBER_ERROR : undefined}
        />
      </div>
    </div>
  );
};

export default React.memo(ContactInfoPart);
