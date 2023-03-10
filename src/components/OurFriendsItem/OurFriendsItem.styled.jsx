import styled from "styled-components";

export const StyledDivBox = styled.div`

display: flex;
flex-direction: column;
text-align: start;
height: auto;
overflow: hidden;
margin-top: 4px;
font-size: 12px;
line-height: 16px;
&:nth-child(1) {
  margin-top: 0px;
  text-align: start;
}
:hover {
  color: #f59256;
}
@media screen and (min-width: 768px) {
  font-size: 14px;
line-height: 19px;
  // height: 35px;
}

@media screen and (min-width: 1280px) {
  // height: auto;
  font-size: 16px;
  line-height: 22px;
}
`;

export const FriendsStyledLi = styled.li`
  width: 280px;
  padding: 14px 4px 12px 4px;
  list-style: none;
  display: block;

  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  transition: scale 250ms linear;

  :hover {
    scale: 1.04;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 16px 4px 16px 4px;

    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
  width: 394px;
  }
`;

export const FriendsStyledA = styled.a`
  display: block;
  text-align: center;
  flex-grow: 1;
  width: 100%;
  // margin-top: 12px;
  margin-bottom: 12px;
  // margin: 12px 0;
  padding: 2px;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  text-decoration: underline solid 1px;
  color: #F59256;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
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
  padding: 4px;
  // background-image: url(./OurFriendsItem/placeholder.png);
  // margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 120px;
    // margin-top: 54px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
    // margin-top: 59px;
  } ;
`;

export const FriendsStyledUL = styled.ul`

  display: flex;
  flex-direction: column;
  // gap: 4px;
  list-style: none;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    // gap: 8px;
    font-size: 14px;
    line-height: 1.357;
  }
  @media screen and (min-width: 1280px) {
    // gap: 12px;
    font-size: 16px;
    line-height: 1.375;
  } ;
`;

export const FriendsInfoStyledLi = styled.li`
margin-bottom: 4px;
hight: 20px;
@media screen and (min-width: 768px) {
  margin-bottom: 8px;
};
@media screen and (min-width: 1280px) {
  margin-bottom: 12px;
} ;

`;

export const FriendsInfoStyledP = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;

@media screen and (min-width: 768px) {
  font-size: 14px;
  line-height: 19px;
}

@media screen and (min-width: 1280px) {
  font-size: 16px;
  line-height: 22px;
}

`;

export const FriendsInfoStyledTime = styled.p`
position: relative;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;

@media screen and (min-width: 768px) {
  font-size: 14px;
  line-height: 19px;
  // position: relative;
}

@media screen and (min-width: 1280px) {
  font-size: 16px;
  line-height: 22px;
  // position: relative;
}

`;


export const StyledLink = styled.a`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-decoration: none;
  color: #000000;
  
  :hover {
    scale: 1.03;
    color: #F59256;
  };


   @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
` ;

export const StyledNoInfo = styled.p`  
font-family: 'Manrope';
font-weight: 500;
font-size: 12px;
line-height: 16px;
align-items: center;
text-decoration: none;
color: #000000;
width: 116px;
margin: 0;
// height: 3px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
    width: 141px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
    width: 161px;
  }
`
