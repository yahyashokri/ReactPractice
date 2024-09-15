import styled from "styled-components";

export const StyledButton = styled.button`
background-color: #007BFF;
color: #fff;
border: none;
padding: 10px 40px;
font-size: 16px;
cursor: pointer;
border-radius: 10px;
transition: all 0.3s ease;
text-decoration: none;
/* margin: 4px 110px; */
:active{
    outline: none;
    transform: scale(1.08);
}
    :disabled{
        background-color: #ccc;
        cursor: not-allowed;
    }
`