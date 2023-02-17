import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1280px; */
  margin-left: auto;
  margin-right: auto;
  padding-left: ${p => p.isHome ? '20px' : '0'};
  padding-right: ${p => p.isHome ? '20px' : '0'};
  width: ${p => p.isHome && '320px'};

  @media (min-width: 768px) {
    width: ${p => p.isHome && '768px'};  
    padding-left: ${p => p.isHome ? '32px' : '0'};
    padding-right: ${p => p.isHome ? '32px' : '0'};
  }


  @media (min-width: 1280px) {
    align-items: baseline;
    width: ${p => p.isHome && '1280px'};
    padding-left: ${p => p.isHome ? '16px' : '0'};
    padding-right: ${p => p.isHome ? '16px' : '0'};
  }
`;
