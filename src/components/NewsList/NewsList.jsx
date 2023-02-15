import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectFilteredNews, selectIsLoadingNews } from 'redux/news/selectors';
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
  const isLoad = useSelector(selectIsLoadingNews);

  const sortNews = news.sort(
    (firstNews, secondNews) =>
      new Date(secondNews.date).getTime() - new Date(firstNews.date).getTime()
  );

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <NewsListStyled>
          {sortNews.map(({ url, title, description, date }) => (
            <NewsItem key={url}>
              <Line />
              <TextStyled text={title} length={40} />
              <DescriptionStyled
                text={description}
                maxLine={6}
                trimRight
                basedOn="words"
              />

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
          {sortNews.length === 0 && <div>No news found at your request</div>}
        </NewsListStyled>
      )}
    </>
  );
};

export default NewsList;
