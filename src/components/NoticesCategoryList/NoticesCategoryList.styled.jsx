import styled from "styled-components";

const NoticesCategoryListStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        /* align-items: flex-start; */
        flex-wrap: wrap;
        gap: 32px;
    }
`;

export default NoticesCategoryListStyled;