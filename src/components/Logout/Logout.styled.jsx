import styled from 'styled-components';

export const LogoutButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  @media (min-width: 768px) {
    position: absolute;
    top: 266px;
  }
  @media (min-width: 1280px) {
    position: static;
    margin-left: 0;
  }
`;

export const LogoutText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  margin-left: 8px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
