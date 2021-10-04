/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width:100%;
  display:grid;
  grid-gap:20px; 

  @media all and (min-width:768px){
    grid-template-columns:repeat(2,1fr);
  }

  @media all and (max-width:767px){
    grid-template-columns:repeat(1,1fr);
  }
`
const FormBodyLayout = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

export default FormBodyLayout
