import { LogoutButton, LogoutText } from './Logout.styled';
import { IoIosLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <LogoutButton type="button" onClick={() => dispatch(logOut())}>
      <IoIosLogOut color="#F59256" fontSize="22px" />
      <LogoutText>Log Out</LogoutText>
    </LogoutButton>
  );
};

export default Logout;
