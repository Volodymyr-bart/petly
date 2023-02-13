import {
  BoxUpPart,
  BtnBox,
  ButtonStyled,
  Comment,
  FilterBox,
  FilterText,
  Icon,
  ImgContainer,
  Item,
  ItemNames,
  ItemText,
  ModalContainer,
  ModalImg,
  ModalList,
  ModalTitle,
} from './NoticeModal.styled';
import { HiHeart } from 'react-icons/hi2';
import { ageCount } from 'utils/ageCount';
// import { useDispatch } from 'react-redux';
// import { getOneNoticeById } from 'redux/notices/operations';

const NoticeModal = ({
  category,
  notice,
  oneNotice,
  isFavorite,
  addFavorite,
}) => {
  const data = ageCount(notice.birthday);
  return (
    <div>
      <ModalContainer>
        <BoxUpPart>
          <ImgContainer>
            {notice.petAvatar?.url && (
              <ModalImg
                src={notice.petAvatar?.url}
                alt="pet"
                width={288}
                height={328}
              />
            )}
            <FilterBox>
              <FilterText>{category}</FilterText>
            </FilterBox>
          </ImgContainer>
          <div>
            <ModalTitle>
              Cute dog looking <br></br> for a home
            </ModalTitle>
            <ModalList>
              <Item>
                <ItemNames>Name:</ItemNames>
                <ItemText>{notice.name || 'No name'}</ItemText>
              </Item>
              <Item>
                <ItemNames>Birthday:</ItemNames>
                <ItemText>{data || 'No data'}</ItemText>
              </Item>
              <Item>
                <ItemNames>Breed:</ItemNames>
                <ItemText>{notice.breed || 'without breed'}</ItemText>
              </Item>
              <Item>
                <ItemNames>Place:</ItemNames>
                <ItemText>{notice.location}</ItemText>
              </Item>
              <Item>
                <ItemNames>The sex:</ItemNames>
                <ItemText>{notice.theSex}</ItemText>
              </Item>
              {oneNotice?.author.email && (
                <Item>
                  <ItemNames>Email:</ItemNames>
                  <ItemText>{oneNotice?.author.email}</ItemText>
                </Item>
              )}
              {oneNotice?.author.phone && (
                <Item>
                  <ItemNames>Phone:</ItemNames>
                  <ItemText>{oneNotice?.author.phone}</ItemText>
                </Item>
              )}
              {category === 'sell' && (
                <Item>
                  <ItemNames>Price:</ItemNames>
                  <ItemText>{notice.price}$</ItemText>
                </Item>
              )}
            </ModalList>
          </div>
        </BoxUpPart>
        <Comment>
          <b>Comments:</b> {notice.comments}
        </Comment>
        <BtnBox>
          <ButtonStyled
            type="button"
            isFavorite={isFavorite}
            onClick={addFavorite}
          >
            Add to{' '}
            <Icon>
              <HiHeart width={16} height={16} />
            </Icon>
          </ButtonStyled>
          <ButtonStyled type="button" className="active">
            <a href="tel:{oneNotice?.author.phone}">Contact</a>
          </ButtonStyled>
        </BtnBox>
      </ModalContainer>
    </div>
  );
};

export default NoticeModal;
