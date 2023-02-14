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
  const newData = new Date(data)
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

  data = dataType === 'Birthday' && data ? newData : data;

  const disabled =
    itemInProcess === dataType || itemInProcess === null ? false : true;

  console.log('data', data);

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
            disabled={disabled}
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
            value={data}
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
