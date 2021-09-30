import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

window.pacificaConcursoWidget = ({ country } = {}) => {
  console.log(country)
  ReactDOM.render(<App/>, document.querySelector('#pacificaConcursoWidget'))
}
