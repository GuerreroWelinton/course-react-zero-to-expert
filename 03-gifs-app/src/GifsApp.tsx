import { mockGifs } from '@/mock-data/gifs.mock';

import { GifList } from '@/gifs/components/GifList';
import { PreviousSearches } from '@/gifs/components/PreviousSearches';

import { CustomHeader } from '@/shared/components/CustomHeader';
import { SearchBar } from '@/shared/components/SearchBar';
import { useState } from 'react';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['goku', 'vegeta']);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string = '') => {
    const formattedQuery = query.trim().toLowerCase();

    if (formattedQuery === '') return;

    const queryExists = previousTerms.includes(formattedQuery);

    if (queryExists) return;

    setPreviousTerms([formattedQuery, ...previousTerms].slice(0, 8));

    // setPreviousTerms(prev => {
    //   if (prev.includes(formattedQuery)) return prev;
    //   return [formattedQuery, ...prev].slice(0, 8);
    // });
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

      <GifList gifs={mockGifs} />
    </>
  );
};

// handle => manejar
