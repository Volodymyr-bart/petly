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
import { Modal } from 'components/Modal/Modal';
import { AddMyPetModal } from 'components/ModalAddNotice/AddMyPetModal/AddMyPetModal';

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

      <PetsList handleDeletePet={handleDeletePet} petsData={petsData}/>
      <Modal isOpen={isOpen} onClose={close}>
        <AddMyPetModal onClose={close} />
      </Modal>
    </UserPageStyled>
  );
};

export default UserPage;
