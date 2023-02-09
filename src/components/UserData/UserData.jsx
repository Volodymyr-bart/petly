import { List, UserImage, Image, EditImage, EditText } from './UserData.styled';
import UserDataItem from '../../components/UserDataItem/UserDataItem';
import { TiCamera } from 'react-icons/ti';
import { useState } from 'react';

// Тимчасові дані. Замінити на дані з ендпоінта
import userImage from './avatar.jpg';

// Тимчасові дані. Замінити на дані з ендпоінта
// const userData = {
//   name: 'user_one',
//   email: 'user_1@gmail.com',
//   birthday: '01.01.01',
//   phone: '099-00-00-000',
//   city: 'Kyiv',
// };

const UserData = ({ userData }) => {
  const [itemInProcess, setItemInProcess] = useState(null);
  const [inputData, setInputData] = useState(null);

  const handleEdit = dataType => {
    setItemInProcess(dataType);
  };

  const handleChange = e => {
    const data = e.target.value;
    setInputData(data);
  };

  const handleSubmit = () => {
    console.log(inputData);
    // Тут написати запит на відправлення inputData з інпуту на сервер

    setItemInProcess(null);
  };

  const handleChangeImage = () => {
    console.log('image changed');
    // Тут написати запит на сервер для зміни фото користувача
  };

  return (
    <>
      <UserImage>
        <Image src={userImage} />
        <EditImage onClick={handleChangeImage}>
          <TiCamera color="#F59256" />
          <EditText>Edit photo</EditText>
        </EditImage>
      </UserImage>
      <List>
        <UserDataItem
          dataType="Name"
          data={userData.name}
          handleEdit={handleEdit}
          itemInProcess={itemInProcess}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          dataType="Email"
          data={userData.email}
          handleEdit={handleEdit}
          itemInProcess={itemInProcess}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          dataType="Birthday"
          data={userData.birthday}
          handleEdit={handleEdit}
          itemInProcess={itemInProcess}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          dataType="Phone"
          data={userData.phone}
          handleEdit={handleEdit}
          itemInProcess={itemInProcess}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          dataType="City"
          data={userData.address}
          handleEdit={handleEdit}
          itemInProcess={itemInProcess}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </List>
    </>
  );
};

export default UserData;
