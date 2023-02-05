import { LogoutButton, LogoutText } from './Logout.styled';
import { IoIosLogOut } from 'react-icons/io';

const Logout = ({ handleLogout }) => {
  return (
    <LogoutButton type="button" onClick={handleLogout}>
      <IoIosLogOut color="#F59256" fontSize="22px" />
      <LogoutText>Log Out</LogoutText>
    </LogoutButton>
  );
};

export default Logout;
