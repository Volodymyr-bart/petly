import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Modal} from "components/ModalMenu/Modal";
import Logo from 'components/Logo/Logo';
import { NavigationMenu, AuthMenu, MobileContainer, SecondaryNav, PrimaryNav, TabletContainer, StyledBurger } from './Navigation.styled';
import { UserMenu } from './../UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const isMobScreen = useMediaQuery({ maxWidth: 767 });
  const isTabScreen = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDeskScreen = useMediaQuery({ minWidth: 1280 });

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {isDeskScreen && <>
        <Logo />
      <NavigationMenu>
        <NavLink  to="/news">
          News
        </NavLink>
        <NavLink  to="/notices">
          Find pet
        </NavLink>
        <NavLink  to="/friends">
          Our friends
        </NavLink>
        </NavigationMenu>
        {isLoggedIn ? <UserMenu /> : <AuthMenu> <AuthNav /> </AuthMenu>}
      </>
      }
      {isMobScreen && showModal && <Modal onClose={setShowModal}>
        <MobileContainer>
          <SecondaryNav>{isLoggedIn ? <UserMenu /> : <AuthMenu> <AuthNav /> </AuthMenu>}</SecondaryNav>
          <PrimaryNav>
            <NavigationMenu>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/notices">Find pet</NavLink>
              <NavLink to="/friends">Our friends</NavLink>
            </NavigationMenu>
          </PrimaryNav>
        </MobileContainer>
      </Modal>}

      {isTabScreen &&
        <SecondaryNav><Logo />{isLoggedIn ? <UserMenu /> : <AuthMenu> <AuthNav /> </AuthMenu>}</SecondaryNav>}
      {isTabScreen && showModal && <Modal onClose={setShowModal}>
        <TabletContainer>
          <NavigationMenu>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>
          </NavigationMenu>
        </TabletContainer>
      </Modal>}
      
        <StyledBurger aria-label='menu' open={showModal} onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}>
          <div />
          <div />
          <div />
        </StyledBurger>

    </>
  );
};
