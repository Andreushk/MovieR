import IOMDBMovieResponse from '@/types/omdb/movieResponse';
import OMDB_API from '@/constants/apiURL';

async function getMovieData(movieTitle: string): Promise<IOMDBMovieResponse> {
  const key: string | undefined = process.env.OMDB_API_KEY;

  const response: Response = await fetch(`${OMDB_API}&t=${movieTitle}&apikey=${key}`);
  const data: IOMDBMovieResponse = await response.json();
  return data;
}

export default getMovieData;
