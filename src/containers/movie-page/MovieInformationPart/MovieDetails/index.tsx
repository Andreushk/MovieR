import { IOMDBMovieResponse } from '@/types/omdb/movieResponse';
import MovieIcon from '@/assets/images/icons/film.svg';
import TextBlock from '@/components/common/TextBlock';
import styles from './styles.module.css';
import Details from './Details';
import Crew from './Crew';
import RatingsAndCountry from './RatingsAndCountry';

const DESCRIPTION_TITLE = 'Description';

interface IComponentProps {
  movieData: IOMDBMovieResponse;
}

const MovieDetails: React.FC<IComponentProps> = ({ movieData }) => (
  <div className={styles.information_container}>
    <TextBlock title={DESCRIPTION_TITLE} text={movieData.Plot} iconPath={MovieIcon} isJustified />
    <RatingsAndCountry
      country={movieData.Country}
      type={movieData.Type}
      rating={movieData.imdbRating}
    />
    <Details
      runtime={movieData.Runtime}
      language={movieData.Language}
      genres={movieData.Genre}
      releaseDate={movieData.Released}
    />
    <Crew director={movieData.Director} writer={movieData.Writer} actors={movieData.Actors} />
  </div>
);

export default MovieDetails;
