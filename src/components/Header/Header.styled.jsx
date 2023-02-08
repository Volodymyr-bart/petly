import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1280px) {
    justify-content: flex-start;
  }
`;
