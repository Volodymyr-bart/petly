import styled from "styled-components";

export const FriendsStyledLi = styled.li`
  width: 280px;
  padding: 14px 4px 12px;
  list-style: none;

  background-color: #FFFFFF;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  transition: scale 250ms linear;

  :hover {
    scale: 1.03;
  }

  @media screen and (min-width: 768px) {
    width: 100%;

    border-radius: 20px;
  }
`;

export const FriendsStyledA = styled.a`
  display: block;
  text-align: center;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 12px;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  text-decoration: underline;
  color: #F59256;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.375;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.35;
  } ;
`;

export const FriendsStyledDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
  } ;
`;

export const FriendsStyledImage = styled.img`
  display: block;
  width: 110px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
  } ;
`;

export const FriendsStyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 14px;
    line-height: 1.357;
  }
  @media screen and (min-width: 1280px) {
    gap: 12px;
    font-size: 16px;
    line-height: 1.375;
  } ;
`;

// export const FriendsStyledInfoTime = styled.li`
//   cursor: ${(props) => (props.shouldHighlight ? "pointer" : "inherit")};
//   :hover {
//     color: ${(props) =>
//       props.shouldHighlight ? props.theme.colors.accent : "inherit"};
//   }
// `;

// export const FriendsInfoItemLink = styled.a`
//   color: ${(p) => p.theme.colors.text.primary};

//   :hover {
//     color: ${(p) => p.theme.colors.accent};
//   }
// `;
