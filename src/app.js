import React from 'react'
import DateAdapter from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { ThemeProvider } from '@mui/material/styles'
import 'moment/locale/es'
import theme from './theme'
import Form from './components/form'

const App = () => {
  return <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={DateAdapter} locale="es">
        <Form/>
    </LocalizationProvider>
  </ThemeProvider>
}

export default App
