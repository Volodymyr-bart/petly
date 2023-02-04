import NewsList from 'components/NewsList/NewsList';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getNews } from 'redux/news/operations';
// import { selectIsLoadingNews } from 'redux/news/selectors';
import { NewsTitle, NewsWrapper, Search } from './News.styled';

const News = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoadingNews);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <NewsWrapper>
      <NewsTitle>News</NewsTitle>

      <Search type="text" placeholder="Search" />
      <NewsList />
    </NewsWrapper>
  );
};

export default News;
