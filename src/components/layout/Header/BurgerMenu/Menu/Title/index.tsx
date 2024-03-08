import CrossIcon from '@/assets/images/icons/cross.svg';
import styles from './style.module.css';
import Image from 'next/image';

const TITLE = 'What are you looking for?';
const CROSS_ICON_ALT = 'cross';

interface IComponentsProps {
  crossIconClickCB: () => void;
}

const Title: React.FC<IComponentsProps> = ({ crossIconClickCB }) => {
  return (
    <div className={styles.title_container}>
      <h1>{TITLE}</h1>
      <div onClick={crossIconClickCB}>
        <Image src={CrossIcon} alt={CROSS_ICON_ALT} />
      </div>
    </div>
  );
};

export default Title;
