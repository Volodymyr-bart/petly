import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import NoticesCategoryList from './NoticesCategoryList/NoticesCategoryList';

const HomePage = lazy(() => import('../pages/Home/Home'));
const NewsPage = lazy(() => import('../pages/News/News'));
const NoticesPage = lazy(() => import('../pages/Notices/Notices'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriends'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route path=":categoryName" element={<NoticesCategoryList />} />
        </Route>

        <Route path="/friends" element={<OurFriendsPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
      </Route>
    </Routes>
  );
};
