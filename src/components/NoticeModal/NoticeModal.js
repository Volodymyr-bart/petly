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
              {notice.title}
            </ModalTitle>
            <ModalList>
              <Item>
                <p style={{ width: '120px' }}>Name:</p>
                <p>{notice.name}</p>
              </Item>
              <Item>
                <p style={{ width: '120px' }}>Birthday:</p>
                <p>{data}</p>
              </Item>
              <Item>
                <p style={{ width: '120px' }}>Breed:</p>
                <p>{notice.breed}</p>
              </Item>
              <Item>
                <p style={{ width: '120px' }}>Place:</p>
                <p>{notice.location}</p>
              </Item>
              <Item>
                <p style={{ width: '120px' }}>The sex:</p>
                <p>{notice.theSex}</p>
              </Item>
              {category === 'sell' && (
                <Item>
                  <p style={{ width: '120px' }}>Price:</p>
                  <p>{notice.price}</p>
                </Item>
              )}
              {oneNotice?.author.email && (
                <Item>
                  <p style={{ width: '120px' }}>Email:</p>
                  <p>{oneNotice?.author.email}</p>
                </Item>
              )}
              {oneNotice?.author.phone && (
                <Item>
                  <p style={{ width: '120px' }}>Phone:</p>
                  <p>{oneNotice?.author.phone}</p>
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
          <ButtonStyled type="button">
            <a href="tel:{oneNotice?.author.phone}">Contact</a>
          </ButtonStyled>
        </BtnBox>
      </ModalContainer>
    </div>
  );
};

export default NoticeModal;
