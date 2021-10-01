import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import context from './services/context'

window.pacificaConcursoWidget = ({ country } = {}) => {
  context.country = country
  ReactDOM.render(<App/>, document.querySelector('#pacificaConcursoWidget'))
}
