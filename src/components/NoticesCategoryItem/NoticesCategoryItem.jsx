import { Modal } from 'components/Modal/Modal';
import NoticeModal from 'components/NoticeModal/NoticeModal';
import { useToggle } from 'hooks';
import { useAuth } from 'hooks';
import { ageCount } from 'utils/ageCount';

import {
  AddToFavoriteStyled,
  ButtonStyled,
  ButtonThumbStyled,
  CategoryStyled,
  ImageThumbStyled,
  NoticesCategoryItemStyled,
} from './NoticesCategoryItem.styled';

const NoticesCategoryItem = ({ category, notice }) => {

  const { isOpen, open, close } = useToggle();
  const { isLoggedIn } = useAuth();

  const addToFavoriteMethod = () => {
    const fav = false;
    // const isLoggedIn = true;
    if (!isLoggedIn) {
      console.log('You have to be loggedIn');
    } else if (!fav) {
      console.log('now it must be added to your favorites');
    } else {
      console.log('remove from favorites');
    }
  }

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

      <CategoryStyled>{notice.category.includes('lost') ? 'lost/found' : notice.category.split('-').join(' ')}</CategoryStyled>
      <AddToFavoriteStyled
        isFavorite={false}
        onClick={addToFavoriteMethod}
      />

      <h2>{ notice.title }</h2>
      <ul>
        <li>
          <p style={{ width: '88px' }}>Breed:</p>
          <p>{ notice.breed }</p>
        </li>
        <li>
          <p style={{ width: '88px' }}>Place:</p>
          <p>{ notice.location }</p>
        </li>
        <li>
          <p style={{ width: '88px' }}>Age:</p>
          <p>{ ageCount(notice.birthday) }</p>
        </li>
        {
          category === 'sell' && 
          <li>
            <p style={{ width: '88px' }}>Price:</p>
            <p>{ notice?.price }</p>
          </li>
        }
      </ul>
      
      <ButtonThumbStyled>
        <ButtonStyled
          type="button"
          onClick={open}
          style={{ backgroundImage: 'none' }}
        >
          Learn more
        </ButtonStyled>
        <Modal isOpen={isOpen} onClose={close}>
          <NoticeModal category={category}/>
        </Modal>
        <ButtonStyled type="button">
          <div>Delete</div>
        </ButtonStyled>
      </ButtonThumbStyled>
    </NoticesCategoryItemStyled>
  );
};

export default NoticesCategoryItem;


