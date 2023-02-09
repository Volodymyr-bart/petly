import styled from 'styled-components';

export const UserPageStyled = styled.div`
  padding: 61px 0 80px 0;
  @media (min-width: 768px) {
    padding: 88px 0 80px 0;
  }
  @media (min-width: 1280px) {
    padding: 60px 0 40px 0;
    display: flex;
  }
`;

export const Header = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #111;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 24px;
  }
`;

export const Profile = styled.div`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
    padding: 0;
  }
  @media (min-width: 1280px) {
    margin-bottom: 0;
    padding: 0;
  }
`;

export const UserCard = styled.div`
  width: 280px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 20px 12px 20px 16px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;
    justify-content: left;
    width: 736px;
    border-radius: 0px 40px 40px 0px;
    position: relative;
    left: -32px;
    padding: 24px 40px 24px 32px;
  }
  @media (min-width: 1280px) {
    display: block;
    width: 411px;
    border-radius: 0px 40px 40px 0px;
    position: relative;
    left: -16px;
    padding: 20px 16px;
  }
`;
