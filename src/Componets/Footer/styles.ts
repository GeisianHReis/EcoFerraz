import styled from "styled-components";

export const FooterStyle = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #2ABF40;
    padding: 30px;
    height: auto;
    justify-content: space-between;
    bottom: 0;
`;

export const MenuColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    color: white;
    margin: 5px 0;
    &:hover {
        text-decoration: underline;
    }
`;
