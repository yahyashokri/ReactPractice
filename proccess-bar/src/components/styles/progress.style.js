import styled from "styled-components"
export const StyledProgress = styled.progress `
position: absolute;
width: 580px;
height: 5px;
progress::-moz-progress-bar { background: green; }
progress::-webkit-progress-value { background-color: green; }
progress { color: green; }
transition:all 1s ease-in;
`