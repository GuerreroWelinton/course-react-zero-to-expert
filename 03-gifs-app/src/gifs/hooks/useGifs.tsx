import { useState } from 'react';

import { getGifsByQuery } from '@/gifs/actions/get-gifs-by-query.action';

import type { Gif } from '@/gifs/interfaces/gifs.interface';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = '') => {
    const formattedQuery = query.trim().toLowerCase();

    if (formattedQuery === '') return;

    if (previousTerms.includes(formattedQuery)) return;

    setPreviousTerms([formattedQuery, ...previousTerms].slice(0, 8));

    // setPreviousTerms(prev => {
    //   if (prev.includes(formattedQuery)) return prev;
    //   return [formattedQuery, ...prev].slice(0, 8);
    // });
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return {
    // Values
    gifs,
    previousTerms,

    // Methods
    handleTermClicked,
    handleSearch,
  };
};
