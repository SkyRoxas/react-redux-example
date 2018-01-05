import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {increment} from './action'
import reducers from './reducers'
import Counter from './components/Counter'

import {createLogger} from 'redux-logger'
const logger = createLogger()

const rootEl = document.getElementById('root')
const store = createStore(reducers, applyMiddleware(logger))

const render = () => {
  ReactDOM.render(<Counter value={store.getState()} onIncrement={() => (store.dispatch(increment()))}/>, rootEl)
}

render()
store.subscribe(render)
