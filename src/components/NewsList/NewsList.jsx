import { useSelector } from 'react-redux';
import { selectFilteredNews } from 'redux/news/selectors';
import {
  DescriptionStyled,
  Line,
  NewsBottom,
  NewsItem,
  NewsLink,
  NewsListStyled,
  TextStyled,
} from './NewsList.styled';

// import React from 'react';
// import EllipsisText from 'react-ellipsis-text';

//allow react dev tools work
// window.React = React;

const NewsList = () => {
  const news = useSelector(selectFilteredNews);

  return (
    <NewsListStyled>
      {news &&
        news.map(({ url, title, description, date }) => (
          <NewsItem key={url}>
            <Line />
            <TextStyled text={title} length={40} />
            <DescriptionStyled text={description} length={230} />
            <NewsBottom>
              <p>{date}</p>
              <NewsLink
                href={`${url}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Read more
              </NewsLink>
            </NewsBottom>
          </NewsItem>
        ))}
    </NewsListStyled>
  );
};

export default NewsList;
