import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 8px;
  display: flex;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    width: calc(736px - 357px);
  }
  @media (min-width: 1280px) {
    /* margin-bottom: 8px; */
  }
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 1280px) {
  }
`;

export const Info = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-left: 82px;
  position: absolute;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    margin-left: 119px;
    /* width: 100%; */
  }
  @media (min-width: 1280px) {
    margin-left: 123px;
  }
`;

export const EditInfo = styled.button`
  width: 20px;
  height: 20px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  margin-left: auto;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    color: #f59256;
    width: 12px;
    height: 12px;
  }
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
  @media (min-width: 1280px) {
  }
`;
