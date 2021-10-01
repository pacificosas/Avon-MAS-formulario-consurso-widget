/* eslint-disable react/prop-types */
import React from 'react'
import DatePicker from './datePicker'
import Select from './select'
import context from '../services/context'
import useLocationOptions from '../hooks/useLocation'

import locationService from '../services/location.service'

import { TextField } from '@mui/material'

const FormUserFields = ({ formik }) => {
  const country = context.country
  const location = locationService(country)

  const [departments, getDepartments] = useLocationOptions(() => location.getDepartments())
  const [cities, getCities] = useLocationOptions((from) => location.getCities(from))
  const [towns, getTowns] = useLocationOptions((from) => location.getTowns(from))

  React.useEffect(() => {
    getDepartments()
  }, [])

  React.useEffect(() => {
    const currentDepto = formik.values.department
    if (!currentDepto || currentDepto === '') {
      return
    }
    formik.setFieldValue('city', '')
    getCities(formik.values.department)
  }, [formik.values.department])

  React.useEffect(() => {
    const currentCity = formik.values.city
    if (!currentCity || currentCity === '') {
      return
    }
    if (country !== 'co') {
      formik.setFieldValue('town', '')
      getTowns(currentCity)
    }
  }, [formik.values.city])

  return <React.Fragment>
     <TextField
          label="Nombre Completo"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          size="small"
          // error="true"
          // helperText="error aca"
        />

        <TextField
          label="Primer Apellido"
          name="firstLastName"
          onChange={formik.handleChange}
          value={formik.values.firstLastName}
          size="small"
          // error="true"
          // helperText="error aca"
        />

        <TextField
          label="Segundo Apellido"
          name="secondLastName"
          onChange={formik.handleChange}
          value={formik.values.secondLastName}
          size="small"
          // error="true"
          // helperText="error aca"
        />

        <DatePicker
          label="Fecha de Nacimiento"
          name="birthDate"
          onChange={(val) => {
            formik.setFieldValue('birthDate', val)
          }}
          size="small"
          // error="true"
          // helperText="error aca"

        />
          <TextField
          label="Celular"
          name="cellPhone"
          onChange={formik.handleChange}
          value={formik.values.cellPhone}
          size="small"
          // error="true"
          // helperText="error aca"
        />
        <TextField
          label="Correo electronico"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          size="small"
          // error="true"
          // helperText="error aca"
        />
        <Select
          name="documentIdType"
          value={formik.values.documentIdType}
          label="Tipo de documento"
          onChange={formik.handleChange}
          size="small"
          options={[
            { value: 'ciudadana', label: 'Documento de Ciudadania' },
            { value: 'extranjera', label: 'Documento de Extranjeria' }
          ]}
        />

        <TextField
          label="Documento de identidad"
          name="documentId"
          onChange={formik.handleChange}
          value={formik.values.documentId}
          size="small"
          // error="true"
          // helperText="error aca"
        />

        <Select
          name="department"
          value={formik.values.department}
          label={location.labels.department}
          onChange={formik.handleChange}
          size="small"
          options={departments}
        />

        <Select
          name="city"
          value={formik.values.city}
          label={location.labels.city}
          onChange={formik.handleChange}
          size="small"
          options={cities}
        />

        {country !== 'co' &&
          <Select
            name="town"
            value={formik.values.town}
            label={location.labels.town}
            onChange={formik.handleChange}
            size="small"
            options={towns}
          />
        }

        <TextField
          label="@Instagram"
          name="instagram"
          onChange={formik.handleChange}
          value={formik.values.instagram}
          size="small"
          // error="true"
          // helperText="error aca"
        />

  </React.Fragment>
}

export default FormUserFields
