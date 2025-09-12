interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = 'Buscar' }: Props) => {
  return (
    <div className='search-container'>
      <input id='search-input' type='text' placeholder={placeholder} />
      <button type='button'>Buscar</button>
    </div>
  );
};
