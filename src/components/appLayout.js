/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width:100%;
  display:grid;
  grid-gap:20px; 
  grid-template-columns:repeat(1,1fr);
`
const FormBodyLayout = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

export default FormBodyLayout
