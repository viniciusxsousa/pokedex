import styled from 'styled-components'

export const Cabecalho = styled.header`
    height: 5em;
    background-color: #293744;
    padding-bottom: 2em;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

    img {
        margin: 1em 3em 0;
        max-height: 80%;
    }
`

export const CampoBusca = styled.div`
    display: inline-block;
    width: 30%;
    margin-left: 25em;

    input[type='text']{
        font-size: 1.5em;
        border-radius: 30px;
        padding: .3em 1em;
        border: 3px solid #293744;
    }
`