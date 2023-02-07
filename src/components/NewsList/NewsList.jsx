import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/selectors';
import {
  Line,
  NewsBottom,
  NewsItem,
  NewsItemDescription,
  NewsLink,
  NewsListStyled,
} from './NewsList.styled';

import React from 'react';
import EllipsisText from 'react-ellipsis-text';

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
            <EllipsisText text={item.title} length={'5'} />
            {/* <NewsItemTitle>{item.title}</NewsItemTitle> */}
            <NewsItemDescription>{item.description}</NewsItemDescription>
            <NewsBottom>
              <p>{item.date}</p>
              {/* <a href="{{item.url}}">{item.url}</a> */}
              <NewsLink
                href="{item.url}"
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
