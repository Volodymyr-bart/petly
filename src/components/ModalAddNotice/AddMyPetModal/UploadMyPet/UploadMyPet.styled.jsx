import styled from "styled-components";

export const ImgBoxMyPet = styled.div`
  width: 208px;
  height: 208px;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    margin-bottom: 20px;
  }
`;

export const ImgMyPet = styled.img`
  width: 208px;
  height: 208px;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
  width: 182px;
  height: 182px;
  }
`;