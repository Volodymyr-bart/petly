import { useSelector } from 'react-redux';
import { selectAllUserData } from 'redux/account/selectors';
import UserData from '../../components/UserData/UserData';
import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';
import { UserCard, Profile, Header, UserPageStyled } from './UserPage.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from 'redux/account/operations';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const userData = useSelector(selectAllUserData);
  console.log(1234, userData);

  return (
    <UserPageStyled>
      <Profile>
        <Header>My information:</Header>
        <UserCard>
          <UserData userData={userData} />
          <Logout />
        </UserCard>
      </Profile>
      <PetsData />
    </UserPageStyled>
  );
};

export default UserPage;
