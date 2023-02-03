// import { NavLink } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import { NavLinkContainerStyled, NoticesCategoryNavStyled, NavLinkStyled, AddPetStyled } from './NoticesCategoryNav.styled';

const NotiesCategoryNav = () => {
  return (    
    <NavLinkContainerStyled>
      <NoticesCategoryNavStyled>
        <li>
          <NavLinkStyled to="sell">sell</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="lost-found">lost-found</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="for-free">for-free</NavLinkStyled>
        </li>
      </ NoticesCategoryNavStyled>
      <AddPetStyled><div><AiOutlinePlus size={32} /></div> <span>Add pet</span></AddPetStyled>
    </ NavLinkContainerStyled>
    
    
  );
};

export default NotiesCategoryNav;
