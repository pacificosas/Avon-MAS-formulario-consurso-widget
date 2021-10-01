import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import context from '../services/context'

import UserFields from './formUserFields'

import Check from './checkbox'
import Layout from './FormBodyLayout'

import { Button } from '@mui/material'

const FooterWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-items:center;
  flex-direction:column;
  margin:1rem auto;
  margin-top:2rem;
`
//   if (value.getYear() > 101  value.getYear() < 21) {
//     return
//   }
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

  return <React.Fragment>

    <form onSubmit={formik.handleSubmit}>

      <Layout>
        <UserFields formik={formik}/>
      </Layout>

      <FooterWrapper>
        <Check
          name="newsLetter"
          onChange={formik.handleChange}
          value={formik.values.newsLetter}
          label={'newsLetter'}
          error={formik.touched.newsLetter && formik.errors.newsLetter}
          helperText={ formik.errors.newsLetter}
        />

        <Check
          name="acceptTerms"
          onChange={formik.handleChange}
          value={formik.values.acceptTerms}
          label={'Acepto Terminos y condiciones'}
          error={!!((formik.touched.acceptTerms && formik.errors.acceptTerms))}
          helperText={ formik.errors.acceptTerms}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: '2rem' }}>Enviar</Button>

      </FooterWrapper>

    </form>

  </React.Fragment>
}

export default Form
