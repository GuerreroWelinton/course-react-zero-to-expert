import { mockGifs } from './mock-data/gifs.mock';

import { PreviousSearches } from './gifs/components/PreviousSearches';

import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Buscador de GIFs" description="Descubre y comparte el GIF perfecto" />
      <SearchBar placeholder="Busca lo que quieras" />
      <PreviousSearches />
      // TODO:
      {/*   
        Crear el componente GifList (Props => gifs: Gif[]) 
        y el componente Gif (Props => gif: Gif) 
      */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
