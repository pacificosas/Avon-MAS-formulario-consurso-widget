import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { initContext } from './services/context'

window.pacificaConcursoWidget = ({ country, imagesPath, container, selector } = {}) => {
  initContext({
    country,
    imagesPath
  })

  ReactDOM.render(<App/>, container || document.querySelector(selector || '#pacificaConcursoWidget'))
}
