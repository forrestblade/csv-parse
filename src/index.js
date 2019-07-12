import './css/index.css'
import App from './components/index.connected.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import reducer from './redux/reducers'
import { render } from 'react-dom'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept()
