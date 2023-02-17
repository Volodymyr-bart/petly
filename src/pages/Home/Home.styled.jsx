import styled from 'styled-components';

import WomenWithDogDesktop1x from 'images/homePageImages/desktop/women-with-dog-desktop-1x.png';
import WomenWithDogTablet1x from 'images/homePageImages/tablet/women-with-dog-tablet-1x.png';
import WomenWithDogTablet2x from 'images/homePageImages/tablet/women-with-dog-tablet-2x.png';
import WomenWithDogMob from 'images/homePageImages/mobile/women-with-dog-mob.png';
import BGDesktop1x from 'images/homePageImages/desktop/BG-desktop-1x.png';
import BGTablet1x from 'images/homePageImages/tablet/BG-tablet-1x.png';
import BGTablet2x from 'images/homePageImages/tablet/BG-tablet-2x.png';
import BGMob from 'images/homePageImages/mobile/BG-mob.png';
import HeartDesktop1x from 'images/homePageImages/desktop/Heart-desktop-1x.png';

import deskImage from 'images/homeImgs/home-desk.jpg';
import deskImageRetina from 'images/homeImgs/home-desk2x.jpg'

import tabImage from 'images/homeImgs/home-tablet.jpg'
import tabImageRetina from 'images/homeImgs/home-tablet2x.jpg'

import mobileImage from 'images/homeImgs/home-mobile.jpg'
import mobileImageRetina from 'images/homeImgs/home-mobile2x.jpg'



export const Container = styled.div`
    /* display: flex; */
    height: 100vh;
    width: 100%;
    /* flex-direction: column;
    justify-content: flex-end; */

    background-image: url(${mobileImage});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: calc(100vh - 230px);
    @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        background-image: url(${mobileImageRetina});
    }
    @media screen and (min-width: 768px) {
        background-image: url(${tabImage});
        min-height: calc(100vh - 300px);

        @media screen and (min-width: 768px),
            screen and (min-device-pixel-ratio: 2),
            screen and (min-resolution: 192dpi),
            screen and (min-resolution: 2dppx) {
            background-image: url(${tabImageRetina});
        }
    }
    
    @media screen and (min-width: 1280px) {
        background-image: url(${deskImage});

        @media screen and (min-width: 1280px),
            screen and (min-device-pixel-ratio: 2),
            screen and (min-resolution: 192dpi),
            screen and (min-resolution: 2dppx) {
            background-image: url(${deskImageRetina});
        }
    }
    
`
export const HomeTitle = styled.h1`
    font-size: 32px;
    line-height: 1.38;
    min-height: 133px;
    margin-left: 20px;
    margin-top: 60px;
@media (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
    width: 588px;
    margin-left: 32px;
    margin-top: 88px;
}
@media (min-width: 1280px) {
    max-width: 588px;
    padding-top: 34px;
    margin-left: 16px;
    margin-top: 92px;
}
`
export const HomeImage = styled.div`
background-image: url(${WomenWithDogMob});
background-position: bottom;
background-repeat: no-repeat;
background-size: contain;
background-position: bottom, center;
min-height: calc(100vh - 230px);
@media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${WomenWithDogMob});
}
@media (min-width: 768px) {
    background-image: url(${WomenWithDogTablet1x});
    min-height: calc(100vh - 300px);
}
@media (min-width: 768px),
    screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${WomenWithDogTablet2x});
}
@media (min-width: 1280px) {
    background: none;
}
`
export const Background = styled.section`
max-width: 100vw;
min-height: calc(100vh - 117px);
background-size: cover;
background-position: bottom;
background-repeat: no-repeat;
background-image: url(${BGMob});
@media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${BGMob});
}
@media (min-width: 768px) {
    background-image: url(${BGTablet1x});
    background-position: top;
     
}
@media screen and (min-width: 768px),
     screen and (min-device-pixel-ratio: 2),
     screen and (min-resolution: 192dpi),
     screen and (min-resolution: 2dppx) {
     background-image: url(${BGTablet2x});
     background-position: top;
   
 }
@media (min-width: 1280px) {
    background-image: url(${WomenWithDogDesktop1x}), url(${HeartDesktop1x}), url(${BGDesktop1x});
    background-size: contain, 8%, 100% auto; 
    background-position: 100% 100%, top 5% right 40%, bottom;
    min-height: calc(100vh - 133px);
}
`