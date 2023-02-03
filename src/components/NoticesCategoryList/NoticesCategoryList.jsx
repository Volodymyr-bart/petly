import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';

const NoticesCategoriesList = () => {
  return (
    <NoticesCategoryListStyled>
      {
        [0, 1, 2, 3, 4, 5].map((item, i) => <NoticesCategoryItem key={i} />)
      }
      
    </ NoticesCategoryListStyled>
  );
};

export default NoticesCategoriesList;
