import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoryNav from 'components/NoticesCategoryNav/NoticesCategoryNav';

import { Outlet } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoryList/NoticesCategoryList';
const Notices = () => {
  return (
    <>
      <h1>Find your favorite pet</h1>
      {/* NoticesSearch */}
      <NoticesSearch />
      {/* NotiesCategoryNav */}s
      <NoticesCategoryNav />
      {/* NotiesCategoriesList */}
      <NoticesCategoriesList />
      {/* AddNotiesButton */}
      <Outlet />
    </>
  );
};

export default Notices;
