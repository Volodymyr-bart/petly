

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoryNav from 'components/NoticesCategoryNav/NoticesCategoryNav';

import { Outlet } from 'react-router-dom';
import {NoticesStyled } from './Notices.styled';
// import NoticesCategoriesList from 'components/NoticesCategoryList/NoticesCategoryList';
const Notices = () => {
  return (
    <NoticesStyled>
      <h1>Find your favorite pet</h1>
      {/* NoticesSearch */}
      <NoticesSearch />
      {/* NotiesCategoryNav */}
      <NoticesCategoryNav />
     
      {/* NotiesCategoriesList */}
      {/* <NoticesCategoriesList /> */}
      {/* AddNotiesButton */}
      <Outlet />
    </NoticesStyled>
  );
};

export default Notices;
