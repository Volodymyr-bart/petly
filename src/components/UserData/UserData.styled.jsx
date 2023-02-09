import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 42px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    margin-bottom: 24px;
    margin-right: auto;
  }
`;

export const UserImage = styled.div`
  margin-bottom: 34px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export const Image = styled.img`
  width: 233px;
  border-radius: 50%;
  margin-bottom: 12px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
  @media (min-width: 1280px) {
    /* margin-bottom: 8px; */
  }
`;

export const EditImage = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #111111;
  margin-left: auto;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & > svg {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    position: absolute;
    /* top: 233px; */
    bottom: 0;
    right: 0;
  }
`;

export const EditText = styled.p`
  margin-left: 5px;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
