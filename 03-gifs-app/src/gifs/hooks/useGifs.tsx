import { useRef, useState } from 'react';

import { getGifsByQuery } from '@/gifs/actions/get-gifs-by-query.action';

import type { Gif } from '@/gifs/interfaces/gifs.interface';

// const gifsCache: Record<string, Gif[]> = {};

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
    // Values
    gifs,
    previousTerms,

    // Methods
    handleTermClicked,
    handleSearch,
  };
};

// Cuando un componente cambia de estado mediante una función dispacher
// como lo es el useState, entonces todo el componente o todo el hook se vuelve a ejecutar.
// Sim embargo para las variable con hooks propios de react, estos mantienen el estado entre
// renderizaciones

// Los hooks como los componentes de react cada vez que una pieza de estado cambia mediante una función
// dispacher de reactel customHook o el componente se vuelve a reenderizar en su totalidad

// setPreviousTerms(prev => {
//   if (prev.includes(formattedQuery)) return prev;
//   return [formattedQuery, ...prev].slice(0, 8);
// });
