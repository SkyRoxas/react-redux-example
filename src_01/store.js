import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk' //為 redux 專門處理 非同步的 方法的套件 https://noootown.gitbooks.io/deeperience-react-native-boilerplate/content/Advanced%20State%20Control/Redux%20Thunk.html
import createHistory from 'history/createBrowserHistory' //選擇 HTML5 推薦的 createBrowserHistory 的 history
import rootReducer from './modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]


// 判斷 webpack 是否為開發模式，如果是，這啟用 瀏覽器 Redux 的開發工具
// https://doc.webpack-china.org/guides/production/

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

//http://www.redux.org.cn/docs/api/applyMiddleware.html
const composedEnhancers = compose(  //compose 從左到右組合多個參數，並將其繳付於 Redux Store 裡的第三個參數
  applyMiddleware(...middleware), //applyMiddleware 整合所有的 middleware
  ...enhancers // 環境狀態的陣列
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
