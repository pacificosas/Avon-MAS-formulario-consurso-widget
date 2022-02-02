import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
position:absolute;
top:0;
left:0;
right:0;
left:0;
height:100vh;
display:grid;
grid-template-columns:1fr;
grid-template-rows:1fr;
align-items:center;
justify-items:center;
z-index:9998;
background:#4242424d;
`

const spinAnimation = keyframes`
 
  to {
    transform: rotate(360deg); 
  }
  
`
const Container = styled.div`
   display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items:center;
    justify-items:center;
`

const Spinner = styled.div`
 display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid hsl(270, 4%, 55%);
  border-radius: 50%;
  border-top-color: #7e28c4;
  animation: ${spinAnimation} 1s ease-in-out infinite;
`

const Loading = () => {
  return <Wrapper>
    <Container>
      <Spinner></Spinner>
    </Container>
  </Wrapper>
}

export default Loading
