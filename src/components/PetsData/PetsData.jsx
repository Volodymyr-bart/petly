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

const UserPage = ({ setChangedData, petsData }) => {
  const dispatch = useDispatch();

  const handleDeletePet = id => {
    deletePetData(id);
    setChangedData(dispatch(getUserData()));
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
