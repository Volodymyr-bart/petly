// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { AiOutlinePlus } from "react-icons/ai";
import { NavLinkContainerStyled, NoticesCategoryNavStyled, NavLinkStyled, AddPetStyled } from './NoticesCategoryNav.styled';

const NotiesCategoryNav = () => {
  const { isLoggedIn } = useAuth();

  // const isLoggedIn = true;

  return (    
    <NavLinkContainerStyled>
      <NoticesCategoryNavStyled>
        <li>
          <NavLinkStyled to="" end>sell</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="lost-found">lost/found</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="for-free">in good hands</NavLinkStyled>
        </li>
        {
          isLoggedIn && 
          <>
            <li>
              <NavLinkStyled to="favorite">favorite ads</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="own">my ads</NavLinkStyled>
            </li>
          </>            
        }
        
      </ NoticesCategoryNavStyled>
      <AddPetStyled><div><AiOutlinePlus size={32} /></div> <span>Add pet</span></AddPetStyled>
    </ NavLinkContainerStyled>
    
    
  );
};

export default NotiesCategoryNav;
