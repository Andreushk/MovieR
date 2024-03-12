import CalendarIcon from '@/assets/images/icons/calendar.svg';
import LanguageIcon from '@/assets/images/icons/language.svg';
import DetailsBlock from '@/components/common/DetailsBlock';
import GenresIcon from '@/assets/images/icons/genres.svg';
import ClockIcon from '@/assets/images/icons/clock.svg';

interface IComponentProps {
  releaseDate: string;
  language: string;
  runtime: string;
  genres: string;
}

const Details: React.FC<IComponentProps> = ({ releaseDate, language, runtime, genres }) => (
  <div>
    <DetailsBlock
      firstTitle="Released Year"
      secondTitle="Language"
      firstText={releaseDate}
      secondText={language}
      firstIconPath={CalendarIcon}
      secondIconPath={LanguageIcon}
    />
    <DetailsBlock
      firstTitle="Runtime"
      secondTitle="Genres"
      firstText={runtime}
      secondText={genres}
      firstIconPath={ClockIcon}
      secondIconPath={GenresIcon}
    />
  </div>
);

export default Details;
