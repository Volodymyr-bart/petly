import {
  PetsDataHeader,
  PetsParagraph,
  AddPet,
  AddPetText,
  UserPageStyled,
  Plug,
  PlugParagraph,
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

  const condition = () => {
    if (petsData) {
      return petsData.length > 1;
    } else {
      return petsData !== undefined;
    }
  };

  console.log(petsData);
  return (
    <UserPageStyled>
      <PetsDataHeader>
        <PetsParagraph>My pets:</PetsParagraph>
        <AddPetText>Add pet</AddPetText>
        <AddPet onClick={open}>
          <BsPlusLg color="#fff" fontSize="16px" />
        </AddPet>
      </PetsDataHeader>
      {/* <PetsList handleDeletePet={handleDeletePet} petsData={petsData} /> */}
      {condition() ? (
        <PetsList handleDeletePet={handleDeletePet} petsData={petsData} />
      ) : (
        <Plug>
          <PlugParagraph>Тут нічого, додайте свою першу тварину</PlugParagraph>
        </Plug>
      )}
      <Modal isOpen={isOpen} onClose={close}>
        <AddMyPetModal onClose={close} setChangedData={setChangedData} />
      </Modal>
    </UserPageStyled>
  );
};

export default UserPage;
