import CountryIcon from '@/assets/images/icons/globe.svg';
import TextBlock from '@/components/common/TextBlock';
import TypeIcon from '@/assets/images/icons/cog.svg';
import Rating from './Rating';

const COUNTRY_TITLE = 'Country';
const TYPE_TITLE = 'Type';

interface IComponentProps {
  country: string;
  type: string;
  rating: string;
}

const RatingsAndCountry: React.FC<IComponentProps> = ({ country, type, rating }) => {
  const typeWithUpperLetter: string = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div>
      <TextBlock title={COUNTRY_TITLE} text={country} iconPath={CountryIcon} />
      <TextBlock title={TYPE_TITLE} text={typeWithUpperLetter} iconPath={TypeIcon} />
      <Rating rating={rating} />
    </div>
  );
};

export default RatingsAndCountry;
