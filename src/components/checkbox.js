/* eslint-disable react/prop-types */
import React from 'react'
import Anchor from './anchor'
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@mui/material'

const Check = ({ helperText, error, ...props }) => {
  const anchorLabel = <Anchor href={props.href} target="_blank"
    rel="noreferrer"
    white
  >
    {props.label}
  </Anchor>
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
