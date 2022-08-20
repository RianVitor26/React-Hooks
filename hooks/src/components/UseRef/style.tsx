import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
background-color: var(--Containers-background);
display: flex;
align-items: center;
justify-content: center;
height: 30vh;
border-bottom: 1px  solid gray;

h1{
    color: white;
}

p{
    color: white;
    margin: 0px 3vw;
}

button{
    background-color: #2c2c2c;
    font-size: clamp(12px, 1.5vw, 30px);
    color: white;
    width: 10vw;
    min-width: 100px;
    height: 7vh;
    border-radius: 10px;
    cursor: pointer;
}
`
