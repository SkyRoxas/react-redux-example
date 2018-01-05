import * as ActionType from '../actions'
import {combineReducers} from 'redux'

export const fetchPostRequest = (state = false, action) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS_REQUEST:
      return action.isRequest
    default:
      return state
  }
}
export const fetchPostFailure = (state = false, action) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS_FAILURE:
      return action.isFailure
    default:
      return state
  }
}
export const fetchPostSuccess = (state = [], action) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS_SUCCESS:
      return action.items
    default:
      return state
  }
}

export default combineReducers({
  fetchPostRequest,
  fetchPostFailure,
  fetchPostSuccess
})
