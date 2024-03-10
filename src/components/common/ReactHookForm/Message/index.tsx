import ExclamationIcon from '@/assets/images/icons/exclamation.svg';
import styles from './styles.module.css';
import Image from 'next/image';

const ICON_ALT = 'Exclamation icon';

interface IComponentProps {
  errorMessage: string | undefined;
}

const Message: React.FC<IComponentProps> = ({ errorMessage }) => {
  return (
    <div className={styles.container}>
      {errorMessage && (
        <>
          <div>
            <Image src={ExclamationIcon} alt={ICON_ALT} />
          </div>
          <span>{errorMessage}</span>
        </>
      )}
    </div>
  );
};

export default Message;
