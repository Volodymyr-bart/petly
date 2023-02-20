import ImgPlaceholder from '../../noticesImage/ph.png';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 40px 20px;
  width: 280px;

  @media (min-width: 768px) {
    padding: 32px 20px;
    width: 704px;
  }
`;

export const BoxUpPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin-top: 20px;

  background-color: #ffffff;
  background-image: url(${ImgPlaceholder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0px 0px 40px 40px;

  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
    margin-top: 0;
  }
`;

export const ModalImg = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;

  border-radius: 0px 0px 40px 40px;
  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const FilterBox = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  height: 28px;

  border-radius: 0px 40px 40px 0px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const FilterText = styled.p`
  margin: 6px 0 6px 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  color: #111111;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: #000000;
  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const ModalList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.37;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Item = styled.li`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  &:first-child {
    margin-top: 0;
  }
`;

export const ItemNames = styled.p`
  width: 110px;
  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const ItemText = styled.p`
  font-weight: 500;
  a {
    text-decoration: none;
    outline: none;
    color: black;

    &:hover {
      color: #f59256;
    }
  }
`;

export const Comment = styled.p`
  margin-top: 28px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.04em;

  color: #000000;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BtnBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media (min-width: 768px) {
    font-size: 16px;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 32px;
  }
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  padding: 12px auto;
  border: 2px solid #f59256;
  border-radius: 40px;

  background-color: #ffffff;
  background-size: 16px;
  background-position: 147px;
  background-repeat: no-repeat;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #f59256;

  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #f59256;
    color: #ffffff;
    -webkit-animation: none;
    -webkit-transform: scale(1.05);
    animation: none;
    transform: scale(1.05);
  }

  &.favorite {
    background-color: #f59256;
    color: #ffffff;
  }

  &.active {
    background-color: #f59256;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    outline: none;
    color: #ffffff;
    padding: 9px 87px;

    &:hover,
    &:focus {
      color: #ffffff;
    }
  }
  @media (min-width: 768px) {
    width: 160px;
    height: 40px;
    padding: 12px auto;
    font-size: 20px;
    line-height: 1.35;

    a {
      padding: 8px 44px;
    }
  }
`;

export const Icon = styled.div`
  margin-left: 8px;
`;
