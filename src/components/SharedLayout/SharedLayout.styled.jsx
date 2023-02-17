import styled from "styled-components";

export const StyledSharedLayout = styled.div`
  margin: 0 auto;
  padding: ${p => p.isHome ? '16px 0 0 0' : '16px 20px 0 20px'};
  /* padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px; */
  @media (min-width: 320px) {
    width: 320px;
    width: ${p => p.isHome ? '100%' : '320px'};
  }
  @media (min-width: 768px) {
    width: ${p => p.isHome ? '100%' : '768px'};
    /* width: 768px; */
    /* padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px; */
    padding: ${p => p.isHome ? '24px 0 0 0' : '24px 32px 0 32px'};
  }
  @media (min-width: 1280px) {
    width: ${p => p.isHome ? '100%' : '1280px'};
    /* width: 1280px; */
    /* padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px; */
    padding: ${p => p.isHome ? '20px 0 0 0' : '20px 16px 0 16px'};
  }
`;
