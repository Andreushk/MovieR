import { HookFormCheckbox, Paragraph, PersonalDataModal } from '@/components/common';
import ContactFormDataType from '@/types/contactForm';
import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';
import React, { useState } from 'react';
import Tooltip from './Tooltip';

interface IComponentProps {
  isDisabled: boolean;
  noticeLinkClickCB: () => void;
  inputsRegister: UseFormRegister<ContactFormDataType>;
}

const PersonalDataEntryRisksPart: React.FC<IComponentProps> = ({
  isDisabled,
  inputsRegister,
  noticeLinkClickCB,
}) => {
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);
  const [isShowNotice, setIsShowNotice] = useState<boolean>(false);

  const handleDisabledCheckboxClick = (): void => {
    setIsShowTooltip(true);
  };

  const handleNoticeLinkClick = (): void => {
    setIsShowNotice(true);
    setIsShowTooltip(false);
    noticeLinkClickCB();
  };

  const handleCloseNotice = (): void => {
    setIsShowNotice(false);
  };

  return (
    <>
      <div className={styles.container}>
        <HookFormCheckbox
          register={inputsRegister}
          name="acknowledgeRiskAndLiability"
          disabledCheckboxClickCB={handleDisabledCheckboxClick}
          isDisabled={isDisabled}
        />
        <Paragraph type="secondary">
          I agree with{' '}
          <span className={isShowTooltip ? styles.highted : ''} onClick={handleNoticeLinkClick}>
            Risk and Liability Notice
          </span>
        </Paragraph>
        {isShowTooltip && <Tooltip />}
      </div>
      {isShowNotice && <PersonalDataModal closeCB={handleCloseNotice} />}
    </>
  );
};

export default PersonalDataEntryRisksPart;
