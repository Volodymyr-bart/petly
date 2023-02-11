import {
  PetsListStyled,
  PetsItem,
  PetImage,
  DataList,
  DataItem,
  RegularText,
  Delete,
} from './PetsList.styled';
import { nanoid } from 'nanoid';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const PetsList = ({ handleDeletePet, petsData }) => {
  console.log('petsData', petsData);
  return (
    <PetsListStyled>
      {petsData &&
        petsData.map(item => {
          const petBirthday = new Date(item.birthday).toLocaleDateString();
          return (
            <PetsItem key={nanoid(10)}>
              <PetImage src={item.image} />
              <DataList>
                <DataItem>
                  Pet Name: <RegularText>{item.name}</RegularText>
                </DataItem>
                <DataItem>
                  Date of birth: <RegularText>{petBirthday}</RegularText>
                </DataItem>
                <DataItem>
                  Breed: <RegularText>{item.breed}</RegularText>
                </DataItem>
                <DataItem>
                  Comments: <RegularText>{item.comments}</RegularText>
                </DataItem>
              </DataList>
              <Delete onClick={() => handleDeletePet(item._id)}>
                <RiDeleteBin6Fill />
              </Delete>
            </PetsItem>
          );
        })}
    </PetsListStyled>
  );
};

export default PetsList;
