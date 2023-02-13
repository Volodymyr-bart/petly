import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {NoticesStyled } from './Notices.styled';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { searchNoticesSet } from 'redux/notices/searchSlice';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

import Search from 'components/Search/Search';
import NoticesCategoryNav from 'components/NoticesCategoryNav/NoticesCategoryNav';
import { Categories } from 'utils/noticesCatList';


const Notices = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn &&
      (categoryName === Categories.FAVORITE_ADS || categoryName === Categories.MY_ADS))
      navigate('/login');    

    if (!Object.values(Categories).includes(categoryName)) navigate(Categories.SELL);
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, isLoggedIn]);

  const getInputValue = value => dispatch(searchNoticesSet(value));



  return (
    <NoticesStyled>
      <h1>Find your favorite pet</h1>
      
      <Search getValueMethod={getInputValue} />
      
      <NoticesCategoryNav />

      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </NoticesStyled>
  );
};

export default Notices;
