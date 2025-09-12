import { mockGifs } from '@/mock-data/gifs.mock';

import { GifList } from '@/gifs/components/GifList';
import { PreviousSearches } from '@/gifs/components/PreviousSearches';

import { CustomHeader } from '@/shared/components/CustomHeader';
import { SearchBar } from '@/shared/components/SearchBar';
import { useState } from 'react';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['Goku', 'Vegeta']);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  return (
    <>
      <CustomHeader
        title='Buscador de GIFs'
        description='Descubre y comparte el GIF perfecto'
      />

      <SearchBar placeholder='Busca lo que quieras' />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
