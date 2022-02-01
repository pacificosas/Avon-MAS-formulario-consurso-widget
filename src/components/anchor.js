import React from 'react'
/* eslint-disable react/prop-types */
const Anchor = ({ children, ...props }) => {
  return <a {...props} style={{
    textDecoration: 'underline',
    color: 'white'
  }}>{children}</a>
}
export default Anchor
