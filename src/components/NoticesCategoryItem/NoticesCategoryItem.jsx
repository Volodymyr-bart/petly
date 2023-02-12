import { useState, useEffect } from 'react';
import {
  addToFavorite,
  getAllFavoriteNoticesWithoutR,
  getAllOwnNoticesWithoutR,
  getOneNoticeById,
  removeFromFavorite,
  removeFromOwn,
} from 'redux/notices/operations';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

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
import { Categories } from 'utils/noticesCatList';


const NoticesCategoryItem = ({ notice, getFilterId }) => {
  const [favorite, setFavorite] = useState(false);
  const [own, setOwn] = useState(false);
  const { isOpen, open, close } = useToggle();
  const { isLoggedIn } = useAuth();
  const { categoryName } = useParams();
  const [oneNotice, setOneNotice] = useState()

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

      const getOneNotice = async () => {
        const res = await getOneNoticeById(notice._id);
        setOneNotice(res.result)
      }
      getOneNotice();
      getOwn();
      getFavorites();
    }
       
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleFavoriteMethod = async () => { 
    if (isLoggedIn && !favorite) {
      const res = await addToFavorite(notice._id);      
      if (!res) {
        return toast.error("can't add notice");
      }
      setFavorite(true);      
      toast.success('added to your favorites');
      
    } else if (isLoggedIn && favorite) {      
      const res = await removeFromFavorite(notice._id);      
      if (!res) {
        return toast.error("can't remove notice");
      }
      setFavorite(false);
      categoryName === Categories.FAVORITE_ADS && getFilterId(notice._id)
      toast.success('removed from favorites');

    } else { 
      toast.error('You have to be loggedIn');
    }    
  }

  const removeFromOwnMethod = async () => {    
    let isConfirm = window.confirm("You really want to delete this notice?");
    if (isLoggedIn && own && isConfirm) {
      const res = await removeFromOwn(notice._id);      
      if (!res) {
        return toast.error("can't remove");
      }   
      getFilterId(notice._id);
      setOwn(false);
      toast.success('notice removed');          
    }
  }

  return (
    <NoticesCategoryItemStyled>
      <ImageThumbStyled>
        {notice.petAvatar?.url &&
        <img
          src={notice.petAvatar?.url}
          alt="pet"
          width={280}
          height={288}
        />}
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
        {oneNotice !== [] && <Modal isOpen={isOpen} onClose={close}>
          <NoticeModal
            notice={notice}
            oneNotice={oneNotice}
            category={notice.category}
            isFavorite={favorite}
            addFavorite={toggleFavoriteMethod}
          />
        </Modal>}
        {own && <ButtonStyled type="button" onClick={removeFromOwnMethod}>
          <div>Delete</div>
        </ButtonStyled>}
      </ButtonThumbStyled>
    </NoticesCategoryItemStyled>
  );
};

export default NoticesCategoryItem;


