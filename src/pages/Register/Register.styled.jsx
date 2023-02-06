import styled from 'styled-components';

import bgMobImg from '../../imagesAuth/bg-img-auth-mob.png';
import bgTabImg from '../../imagesAuth/bg-img-auth-tab.png';
import bgWebImg from '../../imagesAuth/bg-img-auth-web.png';

export const Container = styled.section`
width: 100%;
padding: 26px 20px 103px 20px;
// height: calc(100vh - 74px);
background-image: url('${bgMobImg}');
background-repeat: no-repeat;
background-size: contain;
background-position: bottom;

@media screen and (min-width: 320px) {
      width: 320px;

@media screen and (min-width: 768px) {
    width: 768px;
  padding: 128px 80px 223px 80px;

  background-image: url('${bgTabImg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}
@media screen and (min-width: 1280px) {
    width: 1280px;
  padding: 26px 331px 113px 331px;
  background-image: url('${bgWebImg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom 50px;
}
`;

export const TitleStyled = styled.h2`
    // font-family: 'Manrope';
    font-weight: 700;
    font-size: 24px;
    line-height: 1.38;
    text-align: center;
    letter-spacing: 0.04em;
    color: #111111;
    margin-bottom: 40px;
`;