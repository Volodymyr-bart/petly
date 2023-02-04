import {
  PetsDataHeader,
  PetsParagraph,
  AddPet,
  AddPetText,
  UserPageStyled,
} from './PetsData.styled';
import PetsList from '../../components/PetsList/PetsList';
import { BsPlusLg } from 'react-icons/bs';

const UserPage = () => {
  return (
    <UserPageStyled>
      <PetsDataHeader>
        <PetsParagraph>My pets:</PetsParagraph>
        <AddPetText>Add pet</AddPetText>
        <AddPet>
          <BsPlusLg color="#fff" fontSize="16px" />
        </AddPet>
      </PetsDataHeader>
      <PetsList />
    </UserPageStyled>
  );
};

export default UserPage;
