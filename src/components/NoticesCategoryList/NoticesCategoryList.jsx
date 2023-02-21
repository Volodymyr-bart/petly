import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import {
  getAllFavoriteNotices,
  getAllOwnNotices,
  getNoticesByCategory,
  getAllFavoriteNoticesWithoutR,
  getAllOwnNoticesWithoutR,
} from 'redux/notices/operations';
import {
  selectIsLoadingNotices,
  selectFilteredNotices,
  selectFilteredNoticesFavorite,
  // selectNoticeAdd,
} from 'redux/notices/selectors';
import { Categories } from 'utils/noticesCatList';
import NoticesCategoryListStyled, { Text } from './NoticesCategoryList.styled';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks';

const NoticesCategoriesList = () => {
  const [filterId, setFilterId] = useState([]);
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const selector = categoryName === Categories.FAVORITE_ADS ? selectFilteredNoticesFavorite : selectFilteredNotices;
  const notices = useSelector(selector);
  const [favorites, setFavorites] = useState([]);
  const [owns, setOwns] = useState([]);
  const [isFavorites, setIsFavorites] = useState(false);
  const [isOwns, setIsOwns] = useState(false); 
  // const notices = useSelector(selectFilteredNotices);
  // const noticesFavorite = useSelector(selectFilteredNoticesFavorite);
  const isloadingNotices = useSelector(selectIsLoadingNotices);
  const { isLoggedIn } = useAuth();
  
  const [isEmpty, setIsEmpty] = useState(notices.length === 0);

  useEffect(() => {
    if (categoryName === Categories.FAVORITE_ADS) {
      dispatch(getAllFavoriteNotices());
    } else if (categoryName === Categories.MY_ADS) {
      dispatch(getAllOwnNotices());
    } else {
      dispatch(getNoticesByCategory(categoryName));
    }

    if (isLoggedIn) {
        const getFavorites = async () => {
        const res = await getAllFavoriteNoticesWithoutR();
        if (res.result) setFavorites(res.result);
        setIsFavorites(true);
      }

      const getOwn = async () => {
        const res = await getAllOwnNoticesWithoutR();
        // console.log(res)
        if (res.result) setOwns(res.result);      
        setIsOwns(true);
      }

      getOwn();
      getFavorites();
    } else {
      setIsFavorites(true);
      setIsOwns(true);
    }

    

    setFilterId([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  useEffect(() => {
    setIsEmpty(notices.filter(item => !filterId.includes(item._id)).length === 0);
  }, [filterId, isEmpty, notices])

  const getFilterId = id => {
    setFilterId(prev => [...prev, id]);
  };

  // console.log('notices: ', notices);
  
  return (
    <>
      {isloadingNotices ? (
        <Loader />        
      ) : (
        <NoticesCategoryListStyled>
            {isEmpty ?
              (<Text>There is no any notice here ... Add something and maybe this world will be a better place</Text>)
              :
              ( isFavorites && isOwns &&
                notices
                  .filter(item =>
                    !filterId.includes(item._id) &&
                    (categoryName === Categories.FAVORITE_ADS || categoryName === Categories.MY_ADS || categoryName === item.category))
                  .map(item => {
                    const favorite = favorites.find(fav => item._id === fav._id);
                    const own = owns.find(o => item._id === o._id);
                    return <NoticesCategoryItem
                      key={item._id}
                      notice={item}
                      getFilterId={getFilterId}
                      fav={favorite}
                      ow={own}
                    />
                })
          )}
        </NoticesCategoryListStyled>
      )}
    </>
  );
};

export default NoticesCategoriesList;
