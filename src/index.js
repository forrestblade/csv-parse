import './css/index.css'
import { App } from './components/'
import React from 'react'
import { render } from 'react-dom'


render(
    <App />,
  document.getElementById('root')
)

module.hot.accept()
