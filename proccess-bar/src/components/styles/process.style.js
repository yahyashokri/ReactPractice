import styled from "styled-components"
export const StyledProcess = styled.div`
    width: 580px;
    height: 5px;
    background-color: #757575;
    margin-bottom:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    z-index: 0;
    position: relative;
    .active{
        border-color: green;
        color: green;
    .progressBar{
        transition:width 1s linear;
        
    }
     }
`