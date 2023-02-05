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

// Тимчасові дані. Замінити на дані з ендпоінта
import avatar from './avatar.jpg';

// Тимчасові дані. Замінити на дані з ендпоінта
const petsData = [
  {
    image: avatar,
    name: 'cat_one',
    birthday: '01.01.01',
    breed: 'Persian cat',
    comments:
      'Text text text text text text text text text text text text text text text text text',
  },
  {
    image: avatar,
    name: 'cat_two',
    birthday: '02.02.02',
    breed: 'Ukrainian cat',
    comments:
      'Text text text text text text text text text text text text text text text text text',
  },
];

const PetsList = ({ handleDeletePet }) => {
  return (
    <PetsListStyled>
      {petsData.map(item => {
        return (
          <PetsItem key={nanoid(10)}>
            <PetImage src={item.image} />
            <DataList>
              <DataItem>
                Pet Name: <RegularText>{item.name}</RegularText>
                <Delete onClick={handleDeletePet}>
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
