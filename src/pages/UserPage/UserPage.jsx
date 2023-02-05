import UserData from '../../components/UserData/UserData';
import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';
import { UserCard, Profile, Header, UserPageStyled } from './UserPage.styled';

const UserPage = () => {
  const handleLogout = () => {
    console.log('logout');
    // Тут написати запит на logout користувача
  };

  return (
    <UserPageStyled>
      <Profile>
        <Header>My information:</Header>
        <UserCard>
          <UserData />
          <Logout handleLogout={handleLogout} />
        </UserCard>
      </Profile>
      <PetsData />
    </UserPageStyled>
  );
};

export default UserPage;
