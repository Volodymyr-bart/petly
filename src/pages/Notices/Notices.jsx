import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {NoticesStyled } from './Notices.styled';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { searchNoticesSet } from 'redux/notices/searchSlice';

import Search from 'components/Search/Search';
import NoticesCategoryNav from 'components/NoticesCategoryNav/NoticesCategoryNav';


const Notices = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
   if (!isLoggedIn && (categoryName === 'favorite' || categoryName === 'own')) navigate('sell');

    if (!['sell', 'lost-found', 'for-free', 'favorite', 'own'].includes(categoryName)) navigate('sell');
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, isLoggedIn]);

  const getInputValue = value => dispatch(searchNoticesSet(value));



  return (
    <NoticesStyled>
      <h1>Find your favorite pet</h1>
      
      <Search getValueMethod={getInputValue} />
      
      <NoticesCategoryNav />

      <Outlet />
    </NoticesStyled>
  );
};

export default Notices;
