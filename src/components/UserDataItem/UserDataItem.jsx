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
  placeholder,
}) => {
  data =
    dataType === 'Birthday' && data
      ? new Date(data).toLocaleDateString()
      : data;
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
          <DataInput
            onChange={handleChange}
            data-type={dataType}
            placeholder={placeholder}
          />
          <SendInfo type="submit">
            <MdOutlineDone />
          </SendInfo>
        </>
      )}
    </Item>
  );
};

export default UserDataItem;
