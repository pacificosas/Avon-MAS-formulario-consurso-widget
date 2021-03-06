/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width:100%;
  display:grid;
  grid-row-gap:20px; 
`
const FormBodyLayout = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

export default FormBodyLayout
