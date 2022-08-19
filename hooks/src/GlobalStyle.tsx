import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --Containers-background: #3d3d3d;
    --Body-background: #2c2c2c;
    --Texts-size: clamp(12px, 2vw, 50px);
}

body{
    font-family: Sans-Serif;
    background-color: var(--Body-background);
    font-size: var(--Texts-size);
}
`

export default Global