import React from 'react'
import DateAdapter from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import Form from './components/form'

const App = () => {
  return <LocalizationProvider dateAdapter={DateAdapter}>
    <Form/>
  </LocalizationProvider>
}

export default App
