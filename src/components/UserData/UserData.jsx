import { List, UserImage, Image, EditImage, EditText } from './UserData.styled';
import UserDataItem from '../../components/UserDataItem/UserDataItem';
import { TiCamera } from 'react-icons/ti';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData, changeUserData } from 'redux/account/operations';
import { useRef } from 'react';

// Тимчасові дані. Замінити на дані з ендпоінта
import userImage from './avatar.jpg';

const UserData = ({ userData, setChangedData }) => {
  const [itemInProcess, setItemInProcess] = useState(null);
  const [inputData, setInputData] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = dataType => {
    setItemInProcess(dataType);
  };

  const handleChange = e => {
    const data = e.target.value;
    setInputData(data);
  };

  const handleSubmit = (dataType, imageData) => {
    const newData = {
      ...userData,
      birthday: new Date(userData.birthday).toLocaleDateString(),
      imageData,
    };

    const currentDataType =
      dataType === 'City'
        ? 'address'
        : dataType.charAt(0).toLowerCase() + dataType.slice(1);
    newData[currentDataType] = inputData;
    delete newData.userPetsList;

    changeUserData(newData);
    setChangedData(dispatch(getUserData()));
    setItemInProcess(null);
  };

  const onChooseFile = useRef(null);
  const handleChangeImage = () => {
    onChooseFile.current.click();
  };

  const onChooseUserImage = async e => {
    const imageData = e.target.files[0];
    handleSubmit('userAvatar', imageData);
  };

  return (
    <>
      <UserImage>
        <Image src={userImage} />
        <input
          style={{ display: 'none' }}
          type="file"
          name="photo"
          ref={onChooseFile}
          onChange={onChooseUserImage}
        />
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
