
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import { getAllFavoriteNotices, getAllOwnNotices, getNoticesByCategory } from 'redux/notices/operations';
import {
  selectIsLoadingNotices,
  selectFilteredNotices,
} from 'redux/notices/selectors';
import { Categories } from 'utils/noticesCatList';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';

const NoticesCategoriesList = () => {
  const [favoriteId, setFavoriteId] = useState([]);
  const { categoryName } = useParams()
  const dispatch = useDispatch();
  const notices = useSelector(selectFilteredNotices);  
  const isloadingNotices = useSelector(selectIsLoadingNotices);
  

  useEffect(() => {
    if (categoryName === Categories.FAVORITE_ADS) {
      dispatch(getAllFavoriteNotices());
    } else if (categoryName === Categories.MY_ADS) {
      dispatch(getAllOwnNotices());
    } else {
      dispatch(getNoticesByCategory(categoryName));
    }

    setFavoriteId([]);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName])

  const getFavoriteId = (id) => {
    setFavoriteId(prev => [...prev, id]);
  }

  console.log(notices);

  const isEmpty = notices.length === 0;
  return (
    <>
      {
        isEmpty ? "There are no notices in this category... You can add something and mayby this world will be better!" :
          <NoticesCategoryListStyled>
        {
          isloadingNotices ?
            'Noticeces are loading...' :
                notices
                  .filter(item => !favoriteId.includes(item._id))
                  .map((item) =>
                  <NoticesCategoryItem
                    key={item._id}
                    // category={categoryName}
                    notice={item}
                    getFavoriteId={getFavoriteId}
                  />)
        }
        </ NoticesCategoryListStyled>        
      }
    </>
  
    
    
  );
};

export default NoticesCategoriesList;
