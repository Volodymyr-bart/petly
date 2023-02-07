import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getNoticesByCategory } from 'redux/notices/operations';
import {
  selectIsLoadingNotices,
  selectFilteredNotices,
  // selectNotices
} from 'redux/notices/selectors';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams()
  const dispatch = useDispatch();
  // const notices = useSelector(selectNotices);
  const notices = useSelector(selectFilteredNotices);
  const isloadingNotices = useSelector(selectIsLoadingNotices);  
  

  useEffect(() => {
    dispatch(getNoticesByCategory(categoryName));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName])

  console.log(notices);


  return (
    <NoticesCategoryListStyled>
      
      
      {
        isloadingNotices ?
          'Noticeces are loading...' :
          notices.map((item) => <NoticesCategoryItem key={item._id} category={categoryName} notice={item} />)
      }

     
      
    </ NoticesCategoryListStyled>
  );
};

export default NoticesCategoriesList;
