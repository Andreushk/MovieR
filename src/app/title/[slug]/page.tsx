import MovieInformationPart from '@/containers/movie-page/MovieInformationPart';
import PageTitlePart from '@/containers/movie-page/PageTitlePart';
import IOMDBMovieResponse from '@/types/omdb/movieResponse';
import getMovieData from '@/api/fetchMovieData';
import styles from './styles.module.css';

interface IComponentProps {
  params: {
    slug: string;
  };
}

const Movie: React.FC<IComponentProps> = async ({ params }) => {
  const movieData: IOMDBMovieResponse = await getMovieData(params.slug);

  return (
    <section className={styles.container}>
      <PageTitlePart title={movieData.Title} />
      <MovieInformationPart movieData={movieData} />
    </section>
  );
};

export default Movie;
