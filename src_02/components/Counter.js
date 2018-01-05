import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
  }
  render() {
    const {value, onIncrement} = this.props
    return (<div>
      <p>Clicked: {value} times</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={this.incrementAsync}>Increment async</button>
    </div>)
  }
  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default Counter
