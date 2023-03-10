// import { NavLink } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { ModalAddNotice } from 'components/ModalAddNotice/ModalAddNotice';
import { useAuth, useToggle } from 'hooks';
import { AiOutlinePlus } from "react-icons/ai";
import toast from 'react-hot-toast';
import { NavLinkContainerStyled, NoticesCategoryNavStyled, NavLinkStyled, AddPetStyled } from './NoticesCategoryNav.styled';

const NotiesCategoryNav = () => {
  const { isLoggedIn } = useAuth();
  const { isOpen, open, close } = useToggle();


  // const isLoggedIn = true;

  return (    
    <NavLinkContainerStyled>
      <NoticesCategoryNavStyled>        
        <li>
          <NavLinkStyled to="lost-found">lost/found</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="in-good-hands">in good hands</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="sell" >sell</NavLinkStyled>
        </li>
        {
          isLoggedIn && 
          <>
            <li>
              <NavLinkStyled to="favorite-ads">favorite ads</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="my-ads">my ads</NavLinkStyled>
            </li>
          </>            
        }
      </ NoticesCategoryNavStyled>
      {isLoggedIn ? <AddPetStyled type='button' onClick={open}><div><AiOutlinePlus size={32} /></div> <span>Add pet</span></AddPetStyled> :
      <AddPetStyled type='button' onClick={() => toast.error('Please log in!')}><div><AiOutlinePlus size={32} /></div> <span>Add pet</span></AddPetStyled>}

      <Modal isOpen={isOpen} onClose={close}>
        <ModalAddNotice onClose={close}/>
      </Modal>
    </ NavLinkContainerStyled>
    
    
  );
};

export default NotiesCategoryNav;
