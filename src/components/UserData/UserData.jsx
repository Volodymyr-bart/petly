import { List, UserImage, Image, EditImage, EditText } from './UserData.styled';
import UserDataItem from '../../components/UserDataItem/UserDataItem';
import { TiCamera } from 'react-icons/ti';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData, changeUserData } from 'redux/account/operations';
import { useRef } from 'react';
import placeholder from '../../img/placeholder.png';

const UserData = ({ userData, setChangedData }) => {
  const [itemInProcess, setItemInProcess] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [inputDataType, setInputDataType] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = dataType => {
    setItemInProcess(dataType);
  };

  const handleChange = e => {
    const data = e.target.value;
    setInputData(data);
    setInputDataType(e.target.dataset.type);
  };

  const handleSubmit = (e, imageData) => {
    e.preventDefault();
    // console.log('inputData', inputData);
    // console.log('imageData', imageData);
    // console.log('inputDataType', inputDataType);

    let dataType;
    if (inputDataType === null) {
      dataType = 'userAvatar';
    } else {
      dataType = inputDataType;
    }
    // console.log(userData.birthday);
    let newData = {
      ...userData,
      // birthday: new Date(userData.birthday).toLocaleDateString(),
      imageData,
    };
    if (userData.birthday)
      newData = {
        ...newData,
        birthday: new Date(userData.birthday).toLocaleDateString(),
      };
    const currentDataType =
      dataType === 'City'
        ? 'address'
        : dataType.charAt(0).toLowerCase() + dataType.slice(1);
    const newInputData = inputData === null ? inputData : inputData.trim();
    newData[currentDataType] = newInputData;
    delete newData.userPetsList;

    changeUserData(newData);
    setChangedData(dispatch(getUserData()));
    if (dataType === 'userAvatar')
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    setItemInProcess(null);
    setInputData(null);
    setInputDataType(null);
  };

  const onChooseFile = useRef(null);
  const handleChangeImage = () => {
    onChooseFile.current.click();
  };

  const onChooseUserImage = async e => {
    const imageData = e.target.files[0];
    setInputDataType(e.target.dataset.type);
    handleSubmit(e, imageData);
  };

  return (
    <>
      <UserImage>
        <Image
          src={userData.userAvatar ? userData.userAvatar.url : placeholder}
        />
        <input
          style={{ display: 'none' }}
          type="file"
          name="photo"
          ref={onChooseFile}
          onChange={e => onChooseUserImage(e)}
          data-type="userAvatar"
        />
        <EditImage onClick={handleChangeImage}>
          <TiCamera color="#F59256" />
          <EditText>Edit photo</EditText>
        </EditImage>
      </UserImage>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <List>
          <UserDataItem
            dataType="Name"
            data={userData.name}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
          />
          <UserDataItem
            dataType="Email"
            data={userData.email}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
          />
          <UserDataItem
            dataType="Birthday"
            data={userData.birthday}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
          />
          <UserDataItem
            dataType="Phone"
            data={userData.phone}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
          />
          <UserDataItem
            dataType="City"
            data={userData.address}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
          />
        </List>
      </form>
    </>
  );
};

export default UserData;
