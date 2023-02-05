import { useSelector } from 'react-redux';
import { selectAllServices } from 'redux/services/selectors';
import OurFriendsItem from 'components/OurFriendsItem/OurFriendsItem';
import { OurFriendsListUl } from './OurFriendsList.styled';

const OurFriendsList = () => {

      

    const friends = useSelector(selectAllServices);

    // console.log(friends);

    return (
        <OurFriendsListUl>
            {friends &&
            friends.map(friend => {
                return <OurFriendsItem key={friend._id} friend={friend}/>
            })}
        </OurFriendsListUl>
    )
};

export default OurFriendsList;