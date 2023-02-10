import {
  PetsDataHeader,
  PetsParagraph,
  AddPet,
  AddPetText,
  UserPageStyled,
} from './PetsData.styled';
import PetsList from '../../components/PetsList/PetsList';
import { BsPlusLg } from 'react-icons/bs';
import { useToggle } from '../../hooks';
import { ModalAddNotice } from 'components/ModalAddNotice/ModalAddNotice';
import { Modal } from 'components/Modal/Modal';

const UserPage = () => {
  const { isOpen, open, close } = useToggle();
  const handleDeletePet = () => {
    console.log('delete pet');
    // Тут написати запит на видалення даних тварини
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
