import styled from 'styled-components';

export const PetsListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;

export const PetsItem = styled.li`
  width: 280px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px 40px 20px;
  margin-bottom: 20px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    padding: 20px;
    margin-bottom: 40px;
    display: flex;
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 17.25px;
  @media (min-width: 768px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-bottom: 0;
    margin-right: 32px;
  }
  @media (min-width: 1280px) {
  }
`;

export const DataList = styled.ul``;

export const DataItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    display: flex;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (min-width: 1280px) {
  }
`;

export const Delete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  color: rgba(17, 17, 17, 0.6);
  width: 18px;
  height: 18px;
  @media (min-width: 768px) {
    background-color: #fdf7f2;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    & > svg {
      width: 21px;
      height: 21px;
    }
  }
  @media (min-width: 1280px) {
    /* background-color: #fdf7f2;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 52px;
    & > svg {
      width: 21px;
      height: 21px;
    } */
  }
`;

export const RegularText = styled.span`
  font-weight: 400;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
