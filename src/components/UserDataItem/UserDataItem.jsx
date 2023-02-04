import { Item, Name, Info, EditInfo } from './UserDataItem.styled';
import { FaPen } from 'react-icons/fa';

const UserDataItem = ({ dataType, data }) => {
  console.log(data);
  return (
    <Item>
      <Name>{dataType}:</Name>
      <Info>{data}</Info>
      <EditInfo>
        <FaPen />
      </EditInfo>
    </Item>
  );
};

export default UserDataItem;
