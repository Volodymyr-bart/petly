import styled from "styled-components";

export const OurFriendsListUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 12px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
