import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`
export const HomeTitle = styled.h1`

    font-size: 32px;
    line-height: 1.38;
    min-height: 133px;
@media (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
    width: 588px;
}
@media (min-width: 1280px) {
    max-width: 588px;
    padding-top: 34px;
}
`