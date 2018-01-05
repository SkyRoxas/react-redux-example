import React from 'react'
import {render} from 'react-dom'
import configureStore from './store'
import { Provider } from 'react-redux'
import ItemList from './components'
// import { Router, browserHistory } from 'react-router'
// import routes from './routes'

const store = configureStore()

render(
  <Provider store={store}>
    <ItemList/>
  </Provider>,
  document.getElementById('root')
)
