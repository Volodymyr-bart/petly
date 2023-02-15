// import NewsList from 'components/NewsList/NewsList';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getServices } from 'redux/services/operations';
import { ServiceWrapper } from './OurFriend.styled';
import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
// import { StyledSharedLayout } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const OurFriends = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <ServiceWrapper>
      <h1>Our Friends</h1>

      <OurFriendsList />

      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </ServiceWrapper>
  );
};

export default OurFriends;
