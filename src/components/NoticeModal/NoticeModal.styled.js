import ImgPlaceholder from '../../noticesImage/ph.png';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 32px 20px;
  width: 704px;
`;

export const BoxUpPart = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 288px;
  height: 328px;

  background-color: #ffffff;
  background-image: url(${ImgPlaceholder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ModalImg = styled.img`
  border-radius: 0px 0px 40px 40px;
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
  margin-bottom: 20px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: #000000;
`;

export const ModalList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.37;
`;

export const Item = styled.li`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  &:first-child {
    margin-top: 0;
  }
`;
export const Comment = styled.p`
  margin-top: 28px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const BtnBox = styled.div`
  margin-top: 32px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  padding: 12px auto;
  border: 2px solid #f59256;
  border-radius: 40px;

  background-color: #ffffff;
  background-size: 16px;
  background-position: 147px;
  background-repeat: no-repeat;
  color: #f59256;

  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    /* border-color: #ff6101; */
    background-color: #f59256;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    outline: none;
    color: #f59256;
    padding: 12px 51px;

    &:hover,
    &:focus {
      color: #ffffff;
    }
  }
`;

export const Icon = styled.div`
  margin-left: 8px;
`;
