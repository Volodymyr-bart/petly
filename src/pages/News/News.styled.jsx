import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsTitle = styled.h1`
  margin: 42px auto 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
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
