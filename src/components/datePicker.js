import React from 'react'
import { DatePicker } from '@mui/lab'
import {
  TextField
} from '@mui/material'

// eslint-disable-next-line react/prop-types
const CustomeDatePicker = ({ onChange, ...inputParams }) => {
  const [_value, setValue] = React.useState()
  const ref = React.useRef()
  return <DatePicker
    label="Custom input"
    value={_value}
    ref={ref}
    onChange={(newValue) => {
      try {
        onChange(newValue?._d)
        setValue(newValue)
      } catch {

      }
    }}
    renderInput={(params) => {
      const Ri = < TextField
        {...params} { ...inputParams }
      />
      return Ri
    }}
  />
}

export default CustomeDatePicker
