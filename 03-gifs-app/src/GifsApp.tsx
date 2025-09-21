import { CustomHeader } from '@/shared/components/CustomHeader';
import { SearchBar } from '@/shared/components/SearchBar';

import { GifList } from '@/gifs/components/GifList';
import { PreviousSearches } from '@/gifs/components/PreviousSearches';

import { useGifs } from '@/gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

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
