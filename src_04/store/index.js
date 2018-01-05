import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import {createLogger} from 'redux-logger'
const logger = createLogger()

const configureStore = () => (createStore(rootReducer, applyMiddleware(thunk, logger)))

export default configureStore
