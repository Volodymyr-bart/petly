import styled from "styled-components";

export const ImgBox = styled.div`
  width: 116px;
  height: 116px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const Img = styled.img`
  width: 116px;
  height: 116px;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
  width: 140px;
  height: 140px;
  }
`;


