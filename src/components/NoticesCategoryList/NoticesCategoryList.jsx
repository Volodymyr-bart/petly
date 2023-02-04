import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import { useParams } from 'react-router';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';

const NoticesCategoriesList = () => {
  
  const { categoryName } = useParams()

  // console.log(categoryName);


  return (
    <NoticesCategoryListStyled>
      
      {
        [0, 1, 2, 3, 4, 5].map((item, i) => <NoticesCategoryItem key={i} category={categoryName} />)
      }

     
      
    </ NoticesCategoryListStyled>
  );
};

export default NoticesCategoriesList;
