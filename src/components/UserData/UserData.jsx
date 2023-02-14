import { List, UserImage, Image, EditImage, EditText } from './UserData.styled';
import UserDataItem from '../../components/UserDataItem/UserDataItem';
import { TiCamera } from 'react-icons/ti';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData, changeUserData } from 'redux/account/operations';
import { useRef } from 'react';
import placeholder from '../../img/placeholder.png';
import { toast } from 'react-hot-toast';

const UserData = ({ userData, setChangedData }) => {
  const [itemInProcess, setItemInProcess] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [inputDataType, setInputDataType] = useState(null);
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();

  const newValue = item => {
    if (Object.keys(userData).length !== 0) {
      let finalItem = userData[item];

      if (item === 'city') {
        finalItem = userData['address'];
      } else if (item === 'birthday') {
        finalItem = new Date(userData[item])
          .toLocaleDateString('en-US')
          .split('/')
          .map(item => {
            if (item.length === 1) {
              return `0${item}`;
            } else {
              return item;
            }
          })
          .join('.');
      }
      return finalItem;
    }
  };

  const handleEdit = dataType => {
    setItemInProcess(dataType);
    setValue(newValue(dataType.toLowerCase()));
    setInputData(newValue(dataType.toLowerCase()));
    setInputDataType(dataType);
  };

  const handleChange = e => {
    const data = e.target.value;
    setValue(data);
    setInputData(data);
    setInputDataType(e.target.dataset.type);
  };

  const handleSubmit = (e, imageData) => {
    e.preventDefault();
    // console.log('inputData', inputData);
    // console.log('inputDataType', inputDataType);
    // console.log('imageData', imageData);

    const dataType = inputDataType === null ? 'userAvatar' : inputDataType;

    const getFinalBirthDay = () => {
      if (dataType !== 'birthday') {
        let temporaryBirthday = new Date(userData.birthday)
          .toLocaleDateString()
          .split('.');
        let temp = temporaryBirthday[0];
        temporaryBirthday[0] = temporaryBirthday[1];
        temporaryBirthday[1] = temp;
        temporaryBirthday.join('.');
        return temporaryBirthday;
      } else {
        new Date(userData.birthday).toLocaleDateString();
      }
    };

    const newData = userData.birthday
      ? {
          ...userData,
          imageData,
          birthday: getFinalBirthDay(),
        }
      : {
          ...userData,
          imageData,
        };

    const currentDataType =
      dataType === 'City'
        ? 'address'
        : dataType.charAt(0).toLowerCase() + dataType.slice(1);

    // const newInputData = inputData === null ? inputData : inputData.trim();

    const validateEmail = email => {
      return String(email)
        .toLowerCase()
        .match(
          /^([A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        );
    };

    let newInputData;
    if (inputData === null) {
      newInputData = inputData;
    } else {
      if (currentDataType === 'email') {
        if (validateEmail(inputData) !== null) {
          newInputData = validateEmail(inputData)[0].trim();
        } else {
          toast.error('Invalid email');
          return;
        }
      } else {
        newInputData = inputData.trim();
      }
    }

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
            value={value}
          />
          <UserDataItem
            dataType="Email"
            data={userData.email}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
            value={value}
          />
          <UserDataItem
            dataType="Birthday"
            data={userData.birthday}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
            value={value}
            placeholder={'XX.XX.XXXX'}
          />
          <UserDataItem
            dataType="Phone"
            data={userData.phone}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
            value={value}
            placeholder={'+380XXXXXXXXX'}
          />
          <UserDataItem
            dataType="City"
            data={userData.address}
            handleEdit={handleEdit}
            itemInProcess={itemInProcess}
            handleChange={handleChange}
            value={value}
          />
        </List>
      </form>
    </>
  );
};

export default UserData;
