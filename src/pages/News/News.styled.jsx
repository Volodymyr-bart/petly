import styled from 'styled-components';

export const NewsList = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 60px;

  list-style: none;
`;

export const NewsItem = styled.li`
  min-width: 395px;
`;

export const NewsItemTitle = styled.h3`
  margin-bottom: 16px;
`;
