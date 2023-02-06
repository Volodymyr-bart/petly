import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getNoticesByCategory } from 'redux/notices/operations';
import { selectIsLoadingNotices, selectNotices } from 'redux/notices/selectors';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams()
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const isloadingNotices = useSelector(selectIsLoadingNotices);

  useEffect(() => {
    dispatch(getNoticesByCategory(categoryName));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName])

  console.log(notices);


  return (
    <NoticesCategoryListStyled>
      
      
      {
        isloadingNotices ? 'Noticeces is loading...' : [0, 1, 2, 3, 4, 5].map((item, i) => <NoticesCategoryItem key={i} category={categoryName} />)
      }

     
      
    </ NoticesCategoryListStyled>
  );
};

export default NoticesCategoriesList;
