import { useRef, useState } from 'react';

import { getGifsByQuery } from '@/gifs/actions/get-gifs-by-query.action';

import type { Gif } from '@/gifs/interfaces/gifs.interface';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = '') => {
    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery.length === 0) return;

    if (previousTerms.includes(trimmedQuery)) {
      setGifs(gifsCache.current[query]);
      return;
    }

    setPreviousTerms([trimmedQuery, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    gifs,
    previousTerms,
    handleTermClicked,
    handleSearch,
  };
};
