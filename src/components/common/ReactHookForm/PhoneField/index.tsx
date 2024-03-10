import { E164Number } from 'libphonenumber-js/core';
import PhoneInput from 'react-phone-number-input';
import Message from '../Message';
import 'react-phone-number-input/style.css';
import styles from './styles.module.css';
import { useState } from 'react';

interface IComponentProps {
  label: string;
  placeholder: string;
  value: string | undefined;
  error?: string;
  changeCB: (newValue: string) => void;
}

const PhoneField: React.FC<IComponentProps> = ({ value, label, placeholder, error, changeCB }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePhoneNumberChanges = (value?: E164Number | undefined) => {
    changeCB(value || '');
  };

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label} <span>optional</span>
      </label>
      <PhoneInput
        placeholder={placeholder}
        name="phoneNumber"
        value={value}
        onChange={handlePhoneNumberChanges}
        autoComplete="tel"
        limitMaxLength
        className={styles.input_wrapper}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Message errorMessage={!isFocused && error ? error : undefined} />
    </div>
  );
};

export default PhoneField;
