import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { AddToFavoriteStyled, ButtonStyled, ButtonThumbStyled, CategoryStyled, ImageThumbStyled, NoticesCategoryItemStyled } from "./NoticesCategoryItem.styled";

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
      <AddToFavoriteStyled>
        <AiOutlineHeart size={28} color={'#F59256'} />
      </AddToFavoriteStyled>      

      <h2>Cute cat looking for a home</h2>
      <ul>
        <li><p>Breed:</p><p>Breed</p></li>
        <li><p>Place:</p><p>Lviv</p></li>
        <li><p>Age:</p><p>one year old</p></li>
      </ul>

      <ButtonThumbStyled>
        <ButtonStyled type="button" onClick={() => console.log('v')}>Learn more</ButtonStyled>
        <ButtonStyled type="button"><span>Delete</span> <AiFillDelete size={20} color={'#FF6101'} /></ButtonStyled>
      </ButtonThumbStyled>

      

    </ NoticesCategoryItemStyled>    
  );
    
};

export default NoticesCategoryItem;
