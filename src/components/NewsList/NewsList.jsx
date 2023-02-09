import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/selectors';
import {
  DescriptionStyled,
  Line,
  NewsBottom,
  NewsItem,
  NewsLink,
  NewsListStyled,
  TextStyled,
} from './NewsList.styled';

import React from 'react';
// import EllipsisText from 'react-ellipsis-text';

//allow react dev tools work
window.React = React;

const NewsList = () => {
  const news = useSelector(selectAllNews);

  return (
    <NewsListStyled>
      {news &&
        news.map(item => (
          <NewsItem key={item.url}>
            <Line />
            <TextStyled text={item.title} length={40} />
            
            <DescriptionStyled text={item.description} length={215} />
            <NewsBottom>
              <p>{item.date}</p>
              <NewsLink
                href={`${item.url}`}
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
