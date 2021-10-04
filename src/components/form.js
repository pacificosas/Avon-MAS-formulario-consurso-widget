import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import getContext from '../services/context'

import UserFields from './formUserFields'

import Check from './checkbox'
import FormLayout from './FormBodyLayout'

import { Button } from '@mui/material'
import Layout from './appLayout'

const validationSchema = Yup.object().shape({

  firstName: Yup.string().trim().required('Campo obligatorio'),
  firstLastName: Yup.string().trim().required('Campo obligatorio'),
  secondLastName: Yup.string().trim().required('Campo obligatorio'),
  instagram: Yup.string().trim().matches(/^@.*/, 'Tu usuario debe iniciar por la letra @  - ej: @Avon'),
  email: Yup.string().trim().email('Invalid email').required('Campo obligatorio'),
  cellPhone: Yup.string().trim().required('Campo obligatorio').matches(/^[0-9]+$/, 'Celular inválido').min(6, 'Celular inválido'),
  birthDate: Yup.date().required('Campo obligatorio'),
  documentIdType: Yup.string().trim().required('Campo obligatorio'),
  documentId: Yup.string().trim().matches(/^[0-9]+$/, 'Documento inválido').required('Campo obligatorio').min(6, 'Documento inválido'),
  department: Yup.string().trim().required('Campo obligatorio'),
  city: Yup.string().trim().required('Campo obligatorio'),
  acceptTerms: Yup.boolean().oneOf([true], 'Debes aceptar los terminos y condiciones para continuar'),
  newsLetter: Yup.boolean()
})

const api = process.env.API_FORM
const Form = () => {
  const context = getContext()
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {

      firstName: '',
      firstLastName: '',
      secondLastName: '',
      instagram: '',
      email: '',
      birthDate: '',
      cellPhone: '',
      documentIdType: '',
      documentId: '',
      acceptTerms: false,
      newsLetter: false,
      department: '',
      city: '',
      town: ''

    },

    onSubmit: (values, { setErrors }) => {
      if (values.birthDate.getYear() > 101 || values.birthDate.getYear() < 21) {
        setErrors({ birthDate: 'Fecha inválida' })
        return
      }
      if (context.country !== 'co') {
        if (!values.town) {
          setErrors({ town: 'Campo requerido' })
          return
        }
      }
      fetch(`${api}/users/${context.country}`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(values)
        }
      )
      alert(JSON.stringify(values, null, 2))
    }

  })

  const validate = name => {
    if (formik.touched[name] && formik.errors[name]) {
      return true
    }
    return false
  }

  const getError = (name) => {
    return (formik.touched[name]) && formik.errors[name]
  }
  return <React.Fragment>

    <form onSubmit={formik.handleSubmit}>

      <Layout>
        <picture>

          <source srcSet={`${context.imagesPath}formDesktop.jpg`} media="(min-width: 768px)"/>
          <source srcSet={`${context.imagesPath}formMobile.jpg`} media="(max-width: 768px)"/>
          <img src={`${context.imagesPath}`} alt="img"/>

        </picture>

        <FormLayout>
          <UserFields formik={formik} validate={validate} getError={getError} />
          <Check
            name="newsLetter"
            onChange={formik.handleChange}
            value={formik.values.newsLetter}
            label={'Quiero Recibir noticias de descuentos y promociones especiales'}
            error={validate('newsLetter')}
            helperText={getError('newsLetter')}
          />

          <Check
            name="acceptTerms"
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
            label={'Acepto los Terminos y condiciones'}
            error={validate('acceptTerms')}
            helperText={getError('acceptTerms')}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: '2rem' }}>Enviar</Button>
        </FormLayout>
      </Layout>

    </form>

  </React.Fragment>
}

export default Form
