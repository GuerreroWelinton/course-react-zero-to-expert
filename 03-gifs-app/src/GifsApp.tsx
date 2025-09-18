import { useState } from 'react';

import { GifList } from '@/gifs/components/GifList';
import { PreviousSearches } from '@/gifs/components/PreviousSearches';

import { CustomHeader } from '@/shared/components/CustomHeader';
import { SearchBar } from '@/shared/components/SearchBar';

import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';

import type { Gif } from './gifs/interfaces/gifs.interface';

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
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

  return (
    <>
      <CustomHeader
        title='Buscador de GIFs'
        description='Descubre y comparte el GIF perfecto'
      />

      <SearchBar placeholder='Busca lo que quieras' onQuery={handleSearch} />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};

// handle => manejar
