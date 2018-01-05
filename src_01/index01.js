import css from './btn.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false
    }
  }
  render() {
    let className = 'switch'
    if (this.state.on) {
      className += ' switch-on'
    }
    return <div onClick={this.update.bind(this)} className={className}><div className="btn"></div></div>
  }
  update() {
    store.dispatch(changeSwitch())
  }
  refresh(){
    this.setState(store > store.getState())
  }
  // 連結 redux
  componentDidMount(){
    this.unsubscribe = store.subscribe(this.refresh.bind(this))
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
}

let store = createStore(reducer, {on: false})
let reducer = (state, action)=>{
  switch (action.type) {
    case CHANGE_SWITCH:
      return {on: !state.on}
    default:
      return state
  }
}

// action , action creator
const CHANGE_SWITCH = 'CHANGE_SWITCH'
const changeSwitch = ()=>(
  {type: CHANGE_SWITCH}
)


ReactDOM.render(<Switch/>, document.querySelector('#root'))
