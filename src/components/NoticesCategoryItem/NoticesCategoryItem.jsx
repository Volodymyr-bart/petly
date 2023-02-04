import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { AddToFavoriteStyled, ButtonStyled, CategoryStyled, NoticesCategoryItemStyled } from "./NoticesCategoryItem.styled";

const NoticesCategoryItem = ({category}) => {


  return (
    <NoticesCategoryItemStyled>
      <img
        src="https://oir.mobi/uploads/posts/2021-04/1619814925_21-oir_mobi-p-mordochka-kotenka-zhivotnie-krasivo-foto-25.jpg"
        alt="pet"
        width={280}
        height={288}
      />

      <CategoryStyled>{category}</CategoryStyled>
      <AddToFavoriteStyled><AiOutlineHeart size={28} color={'#F59256'} stroke={'black'} /></AddToFavoriteStyled>
      {/* <AddPetStyled><div>+</div> Add pet</AddPetStyled> */}

      <h2>Cute cat looking for a home</h2>
      <ul>
        <li><p>Breed:</p><p>Breed</p></li>
        <li><p>Place:</p><p>Lviv</p></li>
        <li><p>Age:</p><p>one year old</p></li>
      </ul>

      <ButtonStyled type="button" onClick={() => console.log('v')}>Learn more</ButtonStyled>
      <ButtonStyled type="button"><span>Delete</span> <AiFillDelete size={20} color={'#FF6101'} /></ButtonStyled>

    </ NoticesCategoryItemStyled>    
  );
    
};

export default NoticesCategoryItem;
