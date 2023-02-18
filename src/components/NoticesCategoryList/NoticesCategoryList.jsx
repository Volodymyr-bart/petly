import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import {
  getAllFavoriteNotices,
  getAllOwnNotices,
  getNoticesByCategory,
} from 'redux/notices/operations';
import {
  selectIsLoadingNotices,
  selectFilteredNotices,
  // selectNoticeAdd,
} from 'redux/notices/selectors';
import { Categories } from 'utils/noticesCatList';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';
import { Loader } from 'components/Loader/Loader';

const NoticesCategoriesList = () => {
  const [filterId, setFilterId] = useState([]);
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const notices = useSelector(selectFilteredNotices);
  const isloadingNotices = useSelector(selectIsLoadingNotices);
  // const noticeAdd = useSelector(selectNoticeAdd);
  const [isEmpty, setIsEmpty] = useState(notices.length === 0);

  useEffect(() => {
    if (categoryName === Categories.FAVORITE_ADS) {
      dispatch(getAllFavoriteNotices());
    } else if (categoryName === Categories.MY_ADS) {
      dispatch(getAllOwnNotices());
    } else {
      dispatch(getNoticesByCategory(categoryName));
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

  // console.log(notices);
  
  return (
    <>
      {isloadingNotices ? (
        <Loader />        
      ) : (
        <NoticesCategoryListStyled>
          { isEmpty ? (
            "There is no any notice here ... Add something and maybe this world will be a better place"
          ) : (
            notices
              .filter(item => !filterId.includes(item._id) && categoryName === item.category)
              .map(item => (
                <NoticesCategoryItem
                  key={item._id}
                  notice={item}
                  getFilterId={getFilterId}
                />
              ))
          )}
        </NoticesCategoryListStyled>
      )}
    </>
  );
};

export default NoticesCategoriesList;
