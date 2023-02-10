import { useSelector } from 'react-redux';
import { selectAllUserData } from 'redux/account/selectors';
import UserData from '../../components/UserData/UserData';
import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';
import { UserCard, Profile, Header, UserPageStyled } from './UserPage.styled';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserData } from 'redux/account/operations';

const UserPage = () => {
  const dispatch = useDispatch();

  const [petsDeleted, setPetsDeleted] = useState();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch, petsDeleted]);

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
      <PetsData
        setPetsDeleted={setPetsDeleted}
        petsData={userData.userPetsList}
      />
    </UserPageStyled>
  );
};

export default UserPage;
