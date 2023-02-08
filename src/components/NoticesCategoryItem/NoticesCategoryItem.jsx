import { useState, useEffect } from 'react';
import {
  addToFavorite,
  getAllFavoriteNoticesWithoutR,
  getAllOwnNoticesWithoutR,
  removeFromFavorite,
  removeFromOwn,
} from 'redux/notices/operations';
import toast from 'react-hot-toast';

import { Modal } from 'components/Modal/Modal';
import NoticeModal from 'components/NoticeModal/NoticeModal';
import { useToggle, useAuth } from 'hooks';
import { ageCount } from 'utils/ageCount';
import {
  AddToFavoriteStyled,
  ButtonStyled,
  ButtonThumbStyled,
  CategoryStyled,
  ImageThumbStyled,
  NoticesCategoryItemStyled,
} from './NoticesCategoryItem.styled';

const NoticesCategoryItem = ({ notice, getFavoriteId }) => {
  const [favorite, setFavorite] = useState(false);
  const [own, setOwn] = useState(false);
  const { isOpen, open, close } = useToggle();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      const getFavorites = async () => {
        const res = await getAllFavoriteNoticesWithoutR();
        setFavorite(res?.result.some(({ _id }) => _id === notice._id));      
      }

      const getOwn = async () => {
        const res = await getAllOwnNoticesWithoutR();
        setOwn(res?.result.some(({ _id }) => _id === notice._id));     
      }

      getOwn();
      getFavorites();
    }
        
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleFavoriteMethod = () => { 
    if (isLoggedIn && !favorite) {
      addToFavorite(notice._id);
      setFavorite(true);      
      toast.success('added to your favorites');
      
    } else if (isLoggedIn && favorite) {      
      removeFromFavorite(notice._id);
      setFavorite(false);
      getFavoriteId(notice._id)
      toast.success('remove from favorites');

    } else { 
      toast.error('You have to be loggedIn');
    }    
  }

  const removeFromOwnMethod = () => {
    if (isLoggedIn && own) {
      removeFromOwn(notice._id);
      setOwn(false);
      toast.success('notice removed');      
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
        isFavorite={favorite}
        onClick={toggleFavoriteMethod}
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
          notice.category === 'sell' && 
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
          <NoticeModal category={notice.category}/>
        </Modal>
        {own && <ButtonStyled type="button" onClick={removeFromOwnMethod}>
          <div>Delete</div>
        </ButtonStyled>}
      </ButtonThumbStyled>
    </NoticesCategoryItemStyled>
  );
};

export default NoticesCategoryItem;


