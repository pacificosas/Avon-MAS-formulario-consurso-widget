import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'

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

const Form = () => {
  const formik = useFormik({

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

    onSubmit: values => {
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
        />

        <Check
          name="acceptTerms"
          onChange={formik.handleChange}
          value={formik.values.acceptTerms}
          label={'Acepto Terminos y condiciones'}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: '2rem' }}>Enviar</Button>

      </FooterWrapper>

    </form>

  </React.Fragment>
}

export default Form
