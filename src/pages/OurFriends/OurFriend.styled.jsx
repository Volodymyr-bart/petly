import styled from 'styled-components';

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceTitle = styled.h1`
  margin: 53px auto 28px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  
  @media (min-width: 768px) {
    margin: 88px auto 40px;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
  };

  @media (min-width: 1280px) {
    margin: 61px auto 60px;
  }

`;