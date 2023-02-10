import styled from "styled-components";

export const Area = styled.div`
    height: calc(100vh - 5em);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 35%;
        height: 15%;
    }

    input {
        width: 100%;
        border: 3px solid #293744;
        font-size: 1.5em;
        border-radius: 30px;
        padding: 0.5em 1em;
        background-color: transparent;
    }
`