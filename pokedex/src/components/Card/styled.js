import styled from 'styled-components'

export const CardSecao = styled.div`
    width: 17em;
    background-color: white;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    
    div {
        width: 100%;
    }

    img {
        max-width: 100%;
        border-radius: 10px 10px 0 0;
    }

    p {
        font-size: 1.5em;
        padding: 0.5em 0;
    }
`