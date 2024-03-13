import MovieInformationPart from '@/containers/movie-page/MovieInformationPart';
import getMovieData, { OMDBResponseType } from '@/api/fetchMovieData';
import PageTitlePart from '@/containers/movie-page/PageTitlePart';
import { CenteredMessage } from '@/components/common';
import styles from './styles.module.css';
import { Metadata } from 'next';

const ERROR_MESSAGE = 'Unable to get data about the movie :/';
const NOT_FOUND_MESSAGE = 'Movie not found!';

interface IComponentProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params: { slug } }: IComponentProps): Metadata => {
  const movieNameWithoutCodedSpace: string = decodeURIComponent(slug);

  const metadata: Metadata = {
    title: `MovieR | ${movieNameWithoutCodedSpace}`,
    description: `View information about the ${movieNameWithoutCodedSpace} movie`,
  };

  return metadata;
};

const Movie: React.FC<IComponentProps> = async ({ params }) => {
  const movieData: OMDBResponseType = await getMovieData(params.slug);

  if (movieData === null) {
    return <CenteredMessage message={NOT_FOUND_MESSAGE} />;
  }

  if (movieData === undefined) {
    return <CenteredMessage message={ERROR_MESSAGE} />;
  }

  return (
    <section className={styles.container}>
      <PageTitlePart title={movieData.Title} />
      <MovieInformationPart movieData={movieData} />
    </section>
  );
};

export default Movie;
