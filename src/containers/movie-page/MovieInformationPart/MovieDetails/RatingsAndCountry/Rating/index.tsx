import FilledStar from '@/assets/images/icons/star-filled.svg';
import TitleWithIcon from '@/components/common/TitleWithIcon';
import RatingsIcon from '@/assets/images/icons/star.svg';
import { Paragraph } from '@/components/common';
import styles from './styles.module.css';
import Image from 'next/image';

const RATINGS_TITLE = 'Ratings';
const RATINGS_FROM = 'IMDB';

interface IComponentProps {
  rating: string;
}

const Rating: React.FC<IComponentProps> = ({ rating }) => (
  <div className={styles.rating_wrapper}>
    <TitleWithIcon title={RATINGS_TITLE} iconPath={RatingsIcon} />
    <div className={styles.rating_container}>
      <Paragraph type="primary">{`${RATINGS_FROM}:`}</Paragraph>
      <div className={styles.rating}>
        <div>
          <Image src={FilledStar} alt="icon" />
        </div>
        <Paragraph type="primary">{rating}</Paragraph>
      </div>
    </div>
  </div>
);

export default Rating;
