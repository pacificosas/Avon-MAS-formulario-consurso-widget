/* eslint-disable react/prop-types */
import React from 'react'
import DatePicker from './datePicker'
import Select from './select'
import getContext from '../services/context'
import useLocationOptions from '../hooks/useLocation'

import locationService from '../services/location.service'

import { TextField } from '@mui/material'

const FormUserFields = ({ formik, validate, getError }) => {
  const context = getContext()
  const country = context.country
  const location = locationService(country)

  const [departments, getDepartments] = useLocationOptions(() => location.getDepartments())
  const [cities, getCities] = useLocationOptions((from) => location.getCities(from))
  const [towns, getTowns] = useLocationOptions((from) => location.getTowns(from))

  // const [tellMoreLength, setTellMoreLength] = React.useState(0)
  React.useEffect(() => {
    getDepartments()
  }, [])

  React.useEffect(() => {
    const currentDepto = formik.values.department
    if (!currentDepto || currentDepto === '') {
      return
    }
    formik.setFieldValue('city', '')
    const from = departments.find(d => currentDepto === d.name)?.id
    getCities(from)
  }, [formik.values.department])

  React.useEffect(() => {
    const currentCity = formik.values.city
    if (!currentCity || currentCity === '') {
      return
    }
    if (country !== 'co') {
      formik.setFieldValue('town', '')
      const from = cities.find(d => currentCity === d.name)?.id
      getTowns(from)
    }
  }, [formik.values.city])

  return <React.Fragment>
     <TextField
          label="Nombre *"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          size="small"
          error={validate('firstName') }
          helperText={getError('firstName')}
        />

        <TextField
          label="Primer Apellido *"
          name="firstLastName"
          onChange={formik.handleChange}
          value={formik.values.firstLastName}
          size="small"
          error={validate('firstLastName')}
          helperText={getError('firstLastName')}
        />

        <TextField
          label="Segundo Apellido *"
          name="secondLastName"
          onChange={formik.handleChange}
          value={formik.values.secondLastName}
          size="small"
          error={validate('secondLastName')}
          helperText={getError('secondLastName')}
        />

        <DatePicker
          label="Fecha de Nacimiento *"
          name="birthDate"
          onChange={(val) => {
            formik.setFieldValue('birthDate', val)
          }}
          size="small"
          error={validate('birthDate')}
          helperText={getError('birthDate')}

        />
          <TextField
          label="Celular *"
          name="cellPhone"
          onChange={formik.handleChange}
          value={formik.values.cellPhone}
          size="small"
          error={validate('cellPhone')}
          helperText={getError('cellPhone')}
        />
        <TextField
          label="Correo electr??nico *"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          size="small"
          error={validate('email')}
          helperText={getError('email')}
        />
        <Select
          name="documentIdType"
          value={formik.values.documentIdType}
          label="Tipo de documento *"
          onChange={formik.handleChange}
          size="small"
          options={[
            { value: 'ciudadana', label: 'Documento de Ciudadan??a' },
            { value: 'extranjera', label: 'Documento de Extranjer??a' }
          ]}
          error={validate('documentIdType')}
          helperText={getError('documentIdType')}
        />

        <TextField
          label="Documento de identidad *"
          name="documentId"
          onChange={formik.handleChange}
          value={formik.values.documentId}
          size="small"
          error={validate('documentId')}
          helperText={getError('documentId')}
        />

        <Select
          name="department"
          value={formik.values.department}
          label={location.labels.department}
          onChange={formik.handleChange}
          size="small"
          options={departments}
          error={validate('department')}
          helperText={getError('department')}
        />

        <Select
          name="city"
          value={formik.values.city}
          label={location.labels.city}
          onChange={formik.handleChange}
          size="small"
          options={cities}
          error={validate('city')}
          helperText={getError('city')}
        />

        {country !== 'co' &&
          <Select
            name="town"
            value={formik.values.town}
            label={location.labels.town}
            onChange={formik.handleChange}
            size="small"
            options={towns}
            error={validate('town')}
            helperText={getError('town')}
          />
        }

         <TextField
          label="Direcci??n *"
          name="direction"
          onChange={formik.handleChange}
          value={formik.values.direction}
          error={validate('direction')}
          helperText={getError('direction')}
        />

  </React.Fragment>
}

export default FormUserFields
