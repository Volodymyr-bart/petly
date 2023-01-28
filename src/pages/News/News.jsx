import { getnews } from 'fakeApi';
// import { Link } from 'react-router-dom';
import {
  Line,
  NewsBottom,
  NewsItem,
  NewsItemTitle,
  NewsList,
  NewsTitle,
  NewsWrapper,
  Search,
} from './News.styled';

const News = () => {
  const news = getnews();
  return (
    <NewsWrapper>
      <NewsTitle>News</NewsTitle>
      <Search type="text" placeholder="Search" />
      <NewsList>
        {news.map(item => (
          <NewsItem key={item.title}>
            <Line />
            <NewsItemTitle>{item.title}</NewsItemTitle>
            <p>{item.text}</p>
            <NewsBottom>
              <p>{item.date}</p>
              <button>Read More</button>
              {/* <a href="" target="_blank">
                Read More
              </a> */}
            </NewsBottom>
          </NewsItem>
        ))}
      </NewsList>
    </NewsWrapper>
  );
};

export default News;
