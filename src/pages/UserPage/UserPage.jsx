import UserData from '../../components/UserData/UserData';
import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';
import { UserCard, Profile, Header, UserPageStyled } from './UserPage.styled';

const UserPage = () => {
  return (
    <UserPageStyled>
      <Profile>
        <Header>My information:</Header>
        <UserCard>
          <UserData />
          <Logout />
        </UserCard>
      </Profile>
      <PetsData />
    </UserPageStyled>
  );
};

export default UserPage;
