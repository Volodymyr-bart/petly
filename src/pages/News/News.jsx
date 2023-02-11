import NewsList from 'components/NewsList/NewsList';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getNews } from 'redux/news/operations';
// import { selectIsLoadingNews } from 'redux/news/selectors';
import { NewsWrapper } from './News.styled';
import Search from 'components/Search/Search';
import { searchNoticesSet } from 'redux/notices/searchSlice';

const News = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoadingNews);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const getInputValue = value => dispatch(searchNoticesSet(value));

  return (
    <NewsWrapper>
      <h1>News</h1>

      <Search getValueMethod={getInputValue} />
      <NewsList />
    </NewsWrapper>
  );
};

export default News;
