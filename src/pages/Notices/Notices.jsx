

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoryNav from 'components/NoticesCategoryNav/NoticesCategoryNav';

import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {NoticesStyled } from './Notices.styled';
import { useEffect } from 'react';
import { useAuth } from 'hooks';

// import NoticesCategoriesList from 'components/NoticesCategoryList/NoticesCategoryList';


const Notices = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
   if (!isLoggedIn && (categoryName === 'favorite' || categoryName === 'own')) navigate('sell');

    if (!['sell', 'lost-found', 'for-free', 'favorite', 'own'].includes(categoryName)) navigate('sell');
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, isLoggedIn]);



  return (
    <NoticesStyled>
      <h1>Find your favorite pet</h1>
      
      <NoticesSearch />
      
      <NoticesCategoryNav />

      <Outlet />
    </NoticesStyled>
  );
};

export default Notices;
