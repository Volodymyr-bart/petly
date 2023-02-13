import styled from 'styled-components';

export const Item = styled.li`
  height: 24px;
  margin-bottom: 4px;
  display: flex;
  position: relative;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    width: calc(736px - 357px);
    margin-bottom: 8px;
    height: 32px;
  }
`;

export const Name = styled.p`
  width: 56px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    width: 83px;
  }
`;

export const Info = styled.p`
  width: 220px;
  overflow-x: hidden;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-left: 26px;
  -webkit-mask-image: linear-gradient(90deg, #000 60%, transparent);
  @media (min-width: 768px) {
    margin-left: 36px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const DataInput = styled.input`
  width: 159px;
  height: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-left: 8px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  padding-left: 18px;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    margin-left: 24px;
    width: 216px;
    padding-left: 12px;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
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
  padding: 0;
  & > svg {
    color: ${props => (props.itemInProcess === null ? '#f59256' : '#11111199')};
    width: 10px;
    height: 10px;
  }
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const SendInfo = styled.button`
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
  padding: 0;
  & > svg {
    color: #f59256;
    width: 14px;
    height: 14px;
  }
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    & > svg {
      width: 26px;
      height: 26px;
    }
  }
`;
