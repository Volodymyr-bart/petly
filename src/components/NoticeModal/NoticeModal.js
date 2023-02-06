import {
  BoxUpPart,
  BtnBox,
  ButtonStyled,
  Comment,
  FilterBox,
  FilterText,
  ImgContainer,
  Item,
  ModalContainer,
  ModalImg,
  ModalList,
  ModalTitle,
} from './NoticeModal.styled';

const NoticeModal = ({ category }) => {
  return (
    <div>
      <ModalContainer>
        <BoxUpPart>
          <ImgContainer>
            <ModalImg
              src="https://oir.mobi/uploads/posts/2021-04/1619814925_21-oir_mobi-p-mordochka-kotenka-zhivotnie-krasivo-foto-25.jpg"
              alt="pet"
              width={288}
              height={328}
            />
            <FilterBox>
              <FilterText>{category}</FilterText>
            </FilterBox>
          </ImgContainer>
          <div>
            <ModalTitle>
              Cute dog looking <br></br> for a home
            </ModalTitle>
            <ModalList>
              <Item>Name:</Item>
              <Item>Birthday:</Item>
              <Item>Breed:</Item>
              <Item>Place:</Item>
              <Item>The sex:</Item>
              <Item>Email:</Item>
              <Item>Phone:</Item>
            </ModalList>
          </div>
        </BoxUpPart>
        <Comment>
          Comments: Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
        </Comment>
        <BtnBox>
          <ButtonStyled type="button">Add to </ButtonStyled>
          <ButtonStyled type="button">Contact</ButtonStyled>
        </BtnBox>
      </ModalContainer>
    </div>
  );
};

export default NoticeModal;
