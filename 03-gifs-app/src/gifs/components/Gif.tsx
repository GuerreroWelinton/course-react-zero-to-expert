import type { Gif } from '../interfaces/gifs.interface';

interface Props {
  gif: Gif;
}

export const Gif = ({ gif }: Props) => {
  return (
    <div className='gif-card'>
      <img src={gif.url} alt={gif.title} />

      <h3>{gif.title}</h3>

      <p>
        {gif.width}x{gif.height} (1.5mb)
      </p>
    </div>
  );
};
