import React from 'react'
import {increment} from '../action'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const CounterComponent = (props) => {
  const {value, onIncrement} = props
  return (<div>
    <div>Clicked: {value} times</div>
    <button onClick={onIncrement}>+</button>
  </div>)
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => (dispatch(increment()))
  }
}

CounterComponent.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}


const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

export default Counter

// class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.incrementAsync = this.incrementAsync.bind(this)
//   }
//   render() {
//     const {value, onIncrement} = this.props
//     return (<div>
//       <p>Clicked: {value} times</p>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={this.incrementAsync}>Increment async</button>
//     </div>)
//   }
//   incrementAsync() {
//     setTimeout(this.props.onIncrement, 1000)
//   }
// }
//
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired
// }

//export default Counter
