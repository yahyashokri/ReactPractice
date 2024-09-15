import styled from "styled-components"
export const StyledStep = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff;
    border: solid;
    border-color: #757575;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 99999px;
    z-index: 1;
        & .active{
    background-color: blue;
    }
`