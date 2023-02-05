import {
  AddToFavoriteStyled,
  ButtonStyled,
  ButtonThumbStyled,
  CategoryStyled,
  ImageThumbStyled,
  NoticesCategoryItemStyled
} from "./NoticesCategoryItem.styled";

const NoticesCategoryItem = ({category}) => {


  return (
    <NoticesCategoryItemStyled>
      <ImageThumbStyled>
        <img
          src="https://oir.mobi/uploads/posts/2021-04/1619814925_21-oir_mobi-p-mordochka-kotenka-zhivotnie-krasivo-foto-25.jpg"
          alt="pet"
          width={280}
          height={288}
        />
      </ImageThumbStyled>    

      <CategoryStyled>{category}</CategoryStyled>
      <AddToFavoriteStyled isFavorite={false} />  

      <h2>Cute cat looking for a home</h2>

      <ul>
        <li><p style={{marginRight: '37px'}}>Breed:</p><p>Wild cat</p></li>
        <li><p style={{marginRight: '40px'}}>Place:</p><p>Lviv</p></li>
        <li><p style={{marginRight: '50px'}}>Age:</p><p>One year</p></li>
      </ul>

      <ButtonThumbStyled>
        <ButtonStyled type="button" onClick={() => console.log('v')} style={{backgroundImage: 'none'}}>Learn more</ButtonStyled>
        <ButtonStyled type="button"><div>Delete</div></ButtonStyled>
      </ButtonThumbStyled>

      

    </ NoticesCategoryItemStyled>    
  );
    
};

export default NoticesCategoryItem;
