import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/selectors';
import {
  Line,
  NewsBottom,
  NewsItem,
  NewsItemDescription,
  NewsItemTitle,
  NewsListStyled,
} from './NewsList.styled';

const NewsList = () => {
  const news = useSelector(selectAllNews);

  return (
    <NewsListStyled>
      {news &&
        news.map(item => (
          <NewsItem key={item.title}>
            <Line />
            <NewsItemTitle>{item.title}</NewsItemTitle>
            <NewsItemDescription>{item.description}</NewsItemDescription>
            <NewsBottom>
              <p>{item.date}</p>
              <button>Read More</button>
              {/* <a href="{item.url}" target="_blank">
                Read More
              </a> */}
            </NewsBottom>
          </NewsItem>
        ))}
    </NewsListStyled>
  );
};

export default NewsList;
