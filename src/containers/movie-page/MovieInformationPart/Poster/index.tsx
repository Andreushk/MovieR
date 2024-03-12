import styles from './styles.module.css';
import Image from 'next/image';

interface IComponentProps {
  posterURL: string;
  movieName: string;
}

const Poster: React.FC<IComponentProps> = ({ posterURL, movieName }) => (
  <div className={styles.movie_poster_container}>
    <Image src={posterURL} width={300} height={450} alt={`${movieName} poster`} />
  </div>
);

export default Poster;
