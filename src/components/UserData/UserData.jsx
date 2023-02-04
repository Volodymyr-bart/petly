import { List, UserImage, Image, EditImage, EditText } from './UserData.styled';
import UserDataItem from '../../components/UserDataItem/UserDataItem';
import { TiCamera } from 'react-icons/ti';

// Тимчасові дані. Замінити на дані з ендпоінта
import userImage from './avatar.jpg';

// Тимчасові дані. Замінити на дані з ендпоінта
const dataArray = {
  name: 'user_one',
  email: 'user_1@gmail.com',
  birthday: '01.01.01',
  phone: '099-00-00-000',
  city: 'Kyiv',
};

const UserData = () => {
  return (
    <>
      <UserImage>
        <Image src={userImage} />
        <EditImage>
          <TiCamera color="#F59256" />
          <EditText>Edit photo</EditText>
        </EditImage>
      </UserImage>
      <List>
        <UserDataItem dataType="Name" data={dataArray.name} />
        <UserDataItem dataType="Email" data={dataArray.email} />
        <UserDataItem dataType="Birthday" data={dataArray.birthday} />
        <UserDataItem dataType="Phone" data={dataArray.phone} />
        <UserDataItem dataType="City" data={dataArray.city} />
      </List>
    </>
  );
};

export default UserData;
