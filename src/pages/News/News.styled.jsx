import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsTitle = styled.h1`
  margin: 42px auto 28px;
  @media (min-width: 768px) {
    margin: 70px auto 40px;
  }
`;

export const Search = styled.input`
  margin: 0 auto;
  width: 280px;
  height: 44px;
  padding: 10px;
  padding-left: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 608px;
  }
  @media (min-width: 1280px) {
    /* margin: 0 80px; */
  }
`;

export const NewsList = styled.ul`
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;
  list-style: none;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 60px;
  }
`;

export const NewsItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  @media (min-width: 768px) {
    min-width: 336px;
  }
  @media (min-width: 1280px) {
    min-width: 395px;
  }
`;

export const Line = styled.div`
  width: 280px;
  height: 8px;
  margin-bottom: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

export const NewsItemTitle = styled.h3`
  margin-bottom: 16px;
  /* &:before {
    content: '';
    width: 280px;
    height: 8px;
    background-color: red;
  } */
`;
export const NewsBottom = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;
