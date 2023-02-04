import styled from 'styled-components';

export const NewsListStyled = styled.ul`
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;
  list-style: none;
  margin-top: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 60px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
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
  width: 200px;
  height: 8px;
  margin-bottom: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  @media (min-width: 768px) {
    width: 280px;
  }
  @media (min-width: 1280px) {
    width: 280px;
  }
`;

export const NewsItemTitle = styled.h3`
  margin-bottom: 16px;
  height: 66px;
  overflow: hidden;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
`;
export const NewsItemDescription = styled.h3`
  height: 154px;
  overflow: hidden;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;
  @media (min-width: 1280px) {
    height: 110px;
  }
`;

export const NewsBottom = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;
