'use client';

import { contactValidationSchema } from '@/utils/schemas/contactValidationSchema';
import PersonalDataEntryRisksPart from './PersonalDataEntryRisksPart';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { zodResolver } from '@hookform/resolvers/zod';
import ContactFormDataType from '@/types/contactForm';
import ContactInfoPart from './ContactInfoPart';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import MessagePart from './MessagePart';
import NamePart from './NamePart';
import Buttons from './Buttons';

const FormSection: React.FC = () => {
  const [isUserViewedNotice, setIsUserViewNotice] = useState<boolean>(false);

  const {
    watch,
    reset,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormDataType>({
    mode: 'onBlur',
    resolver: zodResolver(contactValidationSchema),
  });

  const phoneNumberValue: string | undefined = watch('phoneNumber');

  const handleFormSubmit = useCallback((data: ContactFormDataType): void => {
    console.log(data);
    reset();
  }, []);

  const handleFormReset = useCallback((): void => {
    reset();
  }, []);

  const handleUserNoticeClick = useCallback((): void => {
    setIsUserViewNotice(true);
  }, []);

  const isPhoneInputEmpty: boolean = !phoneNumberValue;
  const isPhoneInputValid: boolean = isValidPhoneNumber(phoneNumberValue || '');

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <NamePart
          inputsRegister={register}
          firstNameError={errors.firstName?.message}
          lastNameError={errors.lastName?.message}
        />
        <ContactInfoPart
          setValue={setValue}
          inputsRegister={register}
          phoneInputValue={getValues('phoneNumber')}
          emailInputError={errors.emailAddress?.message}
          isPhoneNumberError={!isPhoneInputEmpty && !isPhoneInputValid}
        />
        <MessagePart inputsRegister={register} error={errors.message?.message} />
        <div className={styles.agreement_and_buttons_container}>
          <PersonalDataEntryRisksPart
            inputsRegister={register}
            noticeLinkClickCB={handleUserNoticeClick}
            isDisabled={!isUserViewedNotice}
          />
          <Buttons
            resetCB={handleFormReset}
            isValid={isValid && (isPhoneInputEmpty || isPhoneInputValid)}
          />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
