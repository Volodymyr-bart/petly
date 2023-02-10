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
  return (
    <PetsListStyled>
      {petsData &&
        petsData.map(item => {
          return (
            <PetsItem key={nanoid(10)}>
              <PetImage src={item.image} />
              <DataList>
                <DataItem>
                  Pet Name: <RegularText>{item.name}</RegularText>
                  <Delete onClick={() => handleDeletePet(item._id)}>
                    <RiDeleteBin6Fill />
                  </Delete>
                </DataItem>
                <DataItem>
                  Date of birth: <RegularText>{item.birthday}</RegularText>
                </DataItem>
                <DataItem>
                  Breed: <RegularText>{item.breed}</RegularText>
                </DataItem>
                <DataItem>
                  Comments: <RegularText>{item.comments}</RegularText>
                </DataItem>
              </DataList>
            </PetsItem>
          );
        })}
    </PetsListStyled>
  );
};

export default PetsList;
