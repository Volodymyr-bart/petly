import {
  PetsDataHeader,
  PetsParagraph,
  AddPet,
  AddPetText,
  UserPageStyled,
} from './PetsData.styled';
import PetsList from '../../components/PetsList/PetsList';
import { BsPlusLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { getUserData, deletePetData } from 'redux/account/operations';
import { useToggle } from '../../hooks';
import { ModalAddNotice } from 'components/ModalAddNotice/ModalAddNotice';
import { Modal } from 'components/Modal/Modal';

const UserPage = ({ setChangedData, petsData }) => {
  const dispatch = useDispatch();
  const { isOpen, open, close } = useToggle();

  const handleDeletePet = id => {
    deletePetData(id);
    setChangedData(dispatch(getUserData()));
  };

  return (
    <UserPageStyled>
      <PetsDataHeader>
        <PetsParagraph>My pets:</PetsParagraph>
        <AddPetText>Add pet</AddPetText>
        <AddPet onClick={open}>
          <BsPlusLg color="#fff" fontSize="16px" />
        </AddPet>
      </PetsDataHeader>

      <PetsList handleDeletePet={handleDeletePet} />
      <Modal isOpen={isOpen} onClose={close}>
        <ModalAddNotice onClose={close}/>
      </Modal>

    </UserPageStyled>
  );
};

export default UserPage;
