import axios from 'axios';

import type { Gif } from '../interfaces/gifs.interface';
import type { GiphyResponse } from '../interfaces/giphy.response';

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await axios.get<GiphyResponse>(
    'https://api.giphy.com/v1/gifs/search',
    {
      params: {
        q: query,
        limit: 10,
        lang: 'es',
        api_key: 'gGgZZxGyghuZajDQT9xOW0RhOdiYlesS',
      },
    }
  );

  return response.data.data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};
