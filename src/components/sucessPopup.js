/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position:fixed;
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
  z-index:1000;
  background:#4242424d;
`

const Card = styled.div`
  background:white;
  border-radius:4px;
  padding:4rem;
  max-width:400px;
`
const SuccessPopup = props => {
  return <Wrapper>
    <Card>{props.children}</Card>
  </Wrapper>
}

export default SuccessPopup
