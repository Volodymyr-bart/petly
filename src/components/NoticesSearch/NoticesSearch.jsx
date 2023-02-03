
import { AiOutlineSearch } from "react-icons/ai";
import NoticesSearchStyled from "./NoticesSearch.styled";

const NoticesSearch = () => {
  


  return (
    <NoticesSearchStyled>
      <input
        type="text"
        placeholder="Search"
      />
      <div><AiOutlineSearch size={24} color={'#111111'} /></div>
      
    </NoticesSearchStyled>
  );
};

export default NoticesSearch;
