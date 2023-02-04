
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import NoticesSearchStyled from "./NoticesSearch.styled";

const NoticesSearch = () => {
  const [inputValue, setInputValue] = useState('');


  return (
    <NoticesSearchStyled>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <button
        type="button"
        onClick={() => console.log(inputValue)}
      >
        <AiOutlineSearch size={24} color={'#111111'} />
      </button>
      
    </NoticesSearchStyled>
  );
};

export default NoticesSearch;
