import React from 'react'
/* eslint-disable react/prop-types */
const Anchor = ({ children, white, ...props }) => {
  return <a {...props} style={{
    textDecoration: 'underline',
    color: white && 'white'
  }}>{children}</a>
}
export default Anchor
