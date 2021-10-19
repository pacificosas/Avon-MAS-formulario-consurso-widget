/* eslint-disable react/prop-types */
import React from 'react'

import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@mui/material'

const Check = ({ helperText, error, ...props }) => {
  const anchorLabel = <a href={props.href} target="_blank"
    style={{ color: '#7e28c4' }} rel="noreferrer"
  >
    {props.label}
  </a>
  return <FormControl error={error}>

    <FormControlLabel
      control={<Checkbox
        checked={props.value}
        onChange={props.onChange}
        name={props.name}
      />}
      label={props.href ? anchorLabel : props.label}
    />
    <FormHelperText >{helperText}</FormHelperText>
  </FormControl>
}

export default Check
