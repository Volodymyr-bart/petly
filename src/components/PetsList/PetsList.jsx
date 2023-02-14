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
import defaultImg from '../../noticesImage/ph.png';

const PetsList = ({ handleDeletePet, petsData }) => {
  return (
    <PetsListStyled>
      {petsData &&
        petsData.map(item => {
          const petBirthday = new Date(item.birthday).toLocaleDateString();
          return (
            <PetsItem key={nanoid(10)}>
              {/* Pictures for default */}
              <PetImage src={item.photo.url || defaultImg} />
              <DataList>
                <DataItem>
                  Pet Name: <RegularText>{item.name}</RegularText>
                </DataItem>
                <DataItem>
                  Date of birth:{' '}
                  <RegularText>
                    {item.birthday ? petBirthday : 'unspecified'}
                  </RegularText>
                </DataItem>
                <DataItem>
                  Breed:{' '}
                  <RegularText>{item.breed || 'unspecified'}</RegularText>
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
