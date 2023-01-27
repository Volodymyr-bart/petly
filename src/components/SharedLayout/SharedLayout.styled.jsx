import styled from 'styled-components';

export const StyledSharedLayout = styled.div`
  margin: 0 auto;
  @media (min-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
