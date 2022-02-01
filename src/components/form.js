import React, { useEffect } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import getContext from '../services/context'

import UserFields from './formUserFields'

import Check from './checkbox'
import FormLayout from './FormBodyLayout'

import { Button } from '@mui/material'
import Layout from './appLayout'
import Success from './sucessPopup'

const validationSchema = Yup.object().shape({

  firstName: Yup.string().trim().required('Campo obligatorio'),
  firstLastName: Yup.string().trim().required('Campo obligatorio'),
  secondLastName: Yup.string().trim().required('Campo obligatorio'),
  direction: Yup.string().trim().max(299, 'max 299 caracteres').required('Campo obligatorio'), // new
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
  const [submited, setSubmited] = React.useState(false)
  const [popupProps, setPopupProps] = React.useState()
  // const [popupData, setPopupData] = React.useState()

  const context = getContext()
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {

      firstName: '',
      firstLastName: '',
      secondLastName: '',
      // instagram: '',
      direction: '', // new
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
      // tellMore: ''

    },

    onSubmit: async (values, { setErrors, resetForm }) => {
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
      try {
        const req = await fetch(`${api}/users/${context.country}`,
          {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(values)
          }
        )
        if (req.status !== 200) {
          return setPopupProps({ type: 'error' })
        }

        const { payload } = await req.json()
        if (payload.duplicate) {
          return setPopupProps({ type: 'duplicate' })
        }

        if (payload.cupon) {
          return setPopupProps({ type: 'success', country: context.country })
        }
      } catch (error) {
        console.error(error)
        return setPopupProps({ type: 'error' })
      }
      resetForm()
    }

  })

  useEffect(() => {
    // setPopupData()
    console.log(popupProps)
    // console.log(getPopupData(popupProps))
    setSubmited(true)
  }, [popupProps])

  const validate = name => {
    if (formik.touched[name] && formik.errors[name]) {
      return true
    }
    return false
  }

  const getError = (name) => {
    return (formik.touched[name]) && formik.errors[name]
  }

  const GetPopupData = (arg = {}) => {
    if (arg.type === 'duplicate') {
      return <span>Lo sentimos, la cédula ingresada ya se encuentra registrada en nuestro sistema.</span>
    }
    if (arg.type === 'error') {
      return <span>Lo sentimos, verifica tus datos y vuelve a internarlo.</span>
    }

    if (arg.type === 'success') {
      if (arg.country === 'co') {
        return <>
         ¡Registro exitoso! Hemos llegado al límite de unidades, tienes un 20%OFF ingresando el cupón
          <strong > AVONSUPER </strong>
          en tus compras, para disfrutarlo en tus productos favoritos. Válido del 21 febrero al 9 de marzo solo en <a target="_blank" href="www.avon.com.co">www.avon.com.co</a>
        </>
      }

      if (arg.country === 'pe') {
        return <>
         ¡Registro exitoso! Hemos llegado al límite de unidades, tienes un 20%OFF ingresando el cupón
          <strong >AVONSUPER </strong> en tus compras, para disfrutarlo en tus productos favoritos. Válido del 16 febrero al 7 marzo solo en <a target="_blank" href="www.avon.com.pe">www.avon.com.pe</a>
          </>
      }

      if (arg.country === 'ec') {
        return <>
          ¡Registro exitoso! Hemos llegado al límite de unidades, tienes un 20% OFF ingresando el cupón
          <strong > AVONSUPER </strong>
         en tus compras, para disfrutarlo en tus productos favoritos. Válido del 22 febrero al 14 de marzo solo en <a target="_blank" href="www.avon.com.ec">www.avon.com.ec</a>
        </>
      }
    }
  }

  return <React.Fragment>
    {submited && popupProps && <Success>
      <h3 align="center" style={{ fontWeight: 'normal' }}>
        <GetPopupData {...popupProps}/>
      </h3>
      <Button type="submit" variant="contained" fullWidth sx={{ mt: '2rem' }}
        onClick={() => setSubmited(false)}
      >
        Continuar
      </Button>
    </Success>}
    <form onSubmit={formik.handleSubmit}>

      <Layout>
        <FormLayout>
          <UserFields formik={formik} validate={validate} getError={getError} />
          <Check
            name="newsLetter"
            onChange={formik.handleChange}
            value={formik.values.newsLetter}
            label={'Quiero recibir noticias de descuentos y promociones especiales.'}
            error={validate('newsLetter')}
            helperText={getError('newsLetter')}
          />

          <Check
            name="acceptTerms"
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
            label={'Acepto los Términos y Condiciones.'}
            error={validate('acceptTerms')}
            helperText={getError('acceptTerms')}
            href='/Terminos-Condiciones-SuperMascara'
          />
          <Button type="submit" variant="contained" sx={{ mt: '2rem' }}>Enviar</Button>
        </FormLayout>
      </Layout>

    </form>

  </React.Fragment>
}

export default Form
