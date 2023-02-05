// import NewsList from 'components/NewsList/NewsList';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getServices } from 'redux/services/operations';
import { ServiceTitle, ServiceWrapper } from './OurFriend.styled';
import OurFriendsList from 'components/OurFriendsList/OurFriendsList';

const OurFriends = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <ServiceWrapper>
      <ServiceTitle>Our Friends</ServiceTitle>

      <OurFriendsList />
    </ServiceWrapper>
  );
};



export default OurFriends;
