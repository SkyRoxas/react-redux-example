// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
import * as actionType from '../action'

const reducers = (state = 0, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return state + 1
      break
    default:
      return state
  }
}

export default reducers
