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

const UserPage = ({ setPetsDeleted, petsData }) => {
  const dispatch = useDispatch();

  const handleDeletePet = id => {
    console.log(id);
    // dispatch(deletePetData(id));
    deletePetData(id);
    setPetsDeleted(dispatch(getUserData()));
    // dispatch(getUserData());
    // Тут написати запит на видалення даних тварини
  };

  return (
    <UserPageStyled>
      <PetsDataHeader>
        <PetsParagraph>My pets:</PetsParagraph>
        <AddPetText>Add pet</AddPetText>
        <AddPet>
          <BsPlusLg color="#fff" fontSize="16px" />
        </AddPet>
      </PetsDataHeader>
      <PetsList handleDeletePet={handleDeletePet} petsData={petsData} />
    </UserPageStyled>
  );
};

export default UserPage;
