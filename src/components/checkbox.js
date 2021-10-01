/* eslint-disable react/prop-types */
import React from 'react'

import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@mui/material'

const Check = ({ helperText, error, ...props }) => {
  return <FormControl error={error}>
    <FormControlLabel
      control={<Checkbox
        checked={props.value}
        onChange={props.onChange}
        name={props.name}
      />}
      label={props.label}
    />
    <FormHelperText >{helperText}</FormHelperText>
  </FormControl>
}

export default Check
