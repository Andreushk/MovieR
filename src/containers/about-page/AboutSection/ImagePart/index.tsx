import CinemaPicture from '@/assets/images/context/cinema.jpg';
import styles from './styles.module.css';
import Image from 'next/image';

const CINEMA_PICTURE_ALT = 'cinema picture';

const ImagePart: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src={CinemaPicture} alt={CINEMA_PICTURE_ALT} />
    </div>
  );
};

export default ImagePart;
