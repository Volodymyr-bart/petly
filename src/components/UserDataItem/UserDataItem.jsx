import {
  Item,
  Name,
  Info,
  EditInfo,
  SendInfo,
  DataInput,
} from './UserDataItem.styled';
import { FaPen } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';

const UserDataItem = ({
  dataType,
  data,
  handleEdit,
  itemInProcess,
  handleChange,
  handleSubmit,
}) => {
  console.log(data);
  data =
    dataType === 'Birthday' && data
      ? new Date(data).toLocaleDateString()
      : data;
  console.log(data);
  return (
    <Item>
      <Name>{dataType}:</Name>
      {itemInProcess !== dataType && (
        <>
          <Info>{data || '-'}</Info>
          <EditInfo
            itemInProcess={itemInProcess}
            type="button"
            onClick={() => handleEdit(dataType)}
          >
            <FaPen />
          </EditInfo>
        </>
      )}
      {itemInProcess === dataType && (
        <>
          <DataInput onChange={handleChange} />
          <SendInfo type="button" onClick={() => handleSubmit(dataType)}>
            <MdOutlineDone />
          </SendInfo>
        </>
      )}
    </Item>
  );
};

export default UserDataItem;
