import { IOMDBMovieResponse, IOMDBNotFoundMovieResponse } from '@/types/omdb/movieResponse';
import OMDB_API from '@/constants/apiURL';

export type OMDBResponseType = IOMDBMovieResponse | undefined | null;

async function getMovieData(movieTitle: string): Promise<OMDBResponseType> {
  const key: string | undefined = process.env.OMDB_API_KEY;

  try {
    const response: Response = await fetch(`${OMDB_API}&t=${movieTitle}&apikey=${key}`);
    const responseData: IOMDBMovieResponse | IOMDBNotFoundMovieResponse = await response.json();

    if (responseData.Response === 'True') return responseData;
    if ('Error' in responseData && responseData.Error === 'Movie not found!') return null;
    return undefined;
  } catch (e) {
    return null;
  }
}

export default getMovieData;
