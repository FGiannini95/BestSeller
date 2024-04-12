import { ChangeEvent } from 'react';
import './inputSearch.scss';

interface InputSearchProps {
  search: string;
  setSearch:React.Dispatch<React.SetStateAction<string>>;
}

export const InputSearch = ({search, setSearch}: InputSearchProps) => {
  
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value);
  }

  return (
    <>
      <input 
        type="text"
        placeholder='Search...'
        value={search}
        onChange={handleSearch}
        />
    </>
  )
}
