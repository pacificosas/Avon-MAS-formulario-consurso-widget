/* eslint-disable react/prop-types */
import React from 'react'

import {
  FormControlLabel,
  Checkbox
} from '@mui/material'

const Check = (props) => {
  return <FormControlLabel control={<Checkbox

    checked={props.value}
    onChange={props.onChange}
    name={props.name}

  />} label={props.label} />
}

export default Check
