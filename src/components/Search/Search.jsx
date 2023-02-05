
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { SearchStyled } from "./Search.styled";

const Search = ({ getValueMethod }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getValueMethod(inputValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])


  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <button
        type="button"
        onClick={() => setInputValue('')}
      >
        {inputValue ? <AiOutlineCloseCircle size={28} color={'#111111'} /> : <AiOutlineSearch size={24} color={'#111111'} />}
      </button>
      
    </SearchStyled>
  );
};

export default Search;
