import { IOMDBMovieResponse } from '@/types/omdb/movieResponse';
import styles from './styles.module.css';
import Poster from './Poster';
import AddButton from './AddButton';
import MovieDetails from './MovieDetails';

interface IComponentProps {
  movieData: IOMDBMovieResponse;
}

const MovieInformationPart: React.FC<IComponentProps> = ({ movieData }) => (
  <div className={styles.movie_data_container}>
    <div className={styles.poster_button_container}>
      <Poster movieName={movieData.Title} posterURL={movieData.Poster} />
      <AddButton />
    </div>
    <MovieDetails movieData={movieData} />
  </div>
);

export default MovieInformationPart;
