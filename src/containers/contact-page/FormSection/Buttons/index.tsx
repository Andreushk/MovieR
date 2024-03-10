import Button from '@/components/common/Button';
import styles from './styles.module.css';
import React from 'react';

const RESET_BUTTON_TEXT = 'Reset';
const SEND_BUTTON_TEXT = 'Send';

interface IComponentProps {
  isValid: boolean;
  resetCB: () => void;
}

const Buttons: React.FC<IComponentProps> = ({ isValid, resetCB }) => {
  return (
    <div className={styles.container}>
      <div className={styles.reset_button_container}>
        <Button value={RESET_BUTTON_TEXT} type="secondary" clickCB={resetCB} />
      </div>
      <div className={styles.send_button_container}>
        <Button value={SEND_BUTTON_TEXT} type="primary" isSubmit isDisabled={!isValid} />
      </div>
    </div>
  );
};

export default React.memo(Buttons);
