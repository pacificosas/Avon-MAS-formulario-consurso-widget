/* eslint-disable react/prop-types */
import React from 'react'

import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText
} from '@mui/material'

const CustomeSelect = ({ helperText, error, ...props }) => {
  const labelId = props.label.replace(/\s*/, '') + 'label'
  const options = props.options.map((opt, index) => {
    return <MenuItem value={opt.value } key={index}>{opt.label}</MenuItem>
  })
  return <FormControl error={error}>
      <InputLabel id={ labelId}>{props.label}</InputLabel>
    <Select
      style={{ minWidth: props.minWidth || '250px' }}
      labelId={labelId}
      name={props.name}
      value={props.value}
      label={props.label}
      onChange={props.onChange}
      size="small"
    >

    {options}

    </Select>
    <FormHelperText >{helperText}</FormHelperText>
  </FormControl>
}

export default CustomeSelect
