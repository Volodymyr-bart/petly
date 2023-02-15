import { useSelector } from 'react-redux';
import { isLoadingServices, selectAllServices } from 'redux/services/selectors';
import OurFriendsItem from 'components/OurFriendsItem/OurFriendsItem';
import { OurFriendsListUl } from './OurFriendsList.styled';
import { Loader } from 'components/Loader/Loader';

const OurFriendsList = () => {
  const friends = useSelector(selectAllServices);
  const isLoad = useSelector(isLoadingServices);

  return (
    <>
    {isLoad ? (
        <Loader />
      ) : (
    <OurFriendsListUl>
      {
        friends.map(friend => {
          return <OurFriendsItem key={friend._id} friend={friend} />;
        })
      }
    </OurFriendsListUl>)}
    </>
  );
};

export default OurFriendsList;
