import styled from "styled-components";



export const StyledTimeDiv = styled.div`

// visibility: hidden;
// position: absolute;

  left: 0;
  bottom: 0;
  background-color: #ffffff;
ul,
li {
  margin-left: 0;
  padding-left: 0px;
}
  :hover div {
    list-style: none;
    position: absolute;
    margin-top: 3px;
    visibility: visible;
    // transform: translate(0, 100%);
    // left: 0px;
    // bottom: 0;
    // top: 25%;
    width: 120px;
    display: block;
    justify-content: space-between;
    padding: 12px 12px 12px 12px;
    // padding: 0;
    border: 1px solid #f59256;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    background: #ffffff;
    border: 1px solid #f59256;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledTable = styled.table`
align: left;
// padding: 12px;
// cellspacing: 10px;
width: 120px;
// border: 2px solid #999;

`;

export const WorkDayStyledTr = styled.tr`

font-family: 'Manrope';
color: #000000;
justify-content: space-between;
// display: inline-block;
font-size: 12px;
font-weight: 500;
line-height: 1.33;
&:not(:last-child) {
  margin-bottom: 4px;
  // margin-right: 5px;
}
// &:child {
  
// }
`;

