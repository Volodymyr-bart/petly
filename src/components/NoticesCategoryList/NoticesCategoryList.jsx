import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import NoticesCategoryListStyled from './NoticesCategoryList.styled';

const NoticesCategoriesList = ({category = ''}) => {
 

  // console.log(category);


  return (
    <NoticesCategoryListStyled>
      
      {
        [0, 1, 2, 3, 4, 5].map((item, i) => <NoticesCategoryItem key={i} category={category} />)
      }

     
      
    </ NoticesCategoryListStyled>
  );
};

export default NoticesCategoriesList;
