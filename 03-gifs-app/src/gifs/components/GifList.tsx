import { Gif } from '@/gifs/components/Gif';

import type { GifResource } from '@/mock-data/gifs.mock';
import type { FC } from 'react';

interface Props {
  gifs: GifResource[];
}

// export const GifList = ({ gifs }: Props) => {
export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <div className='gifs-container'>
      {gifs.map(gif => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};
