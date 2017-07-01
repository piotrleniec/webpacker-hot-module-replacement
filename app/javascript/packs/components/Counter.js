import React from 'react'
import './Counter.sass'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 0 }
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 })
  }

  decrement = () => {
    this.setState({ value: this.state.value - 1 })
  }

  reset = () => {
    this.setState({ value: 0 })
  }

  render() {
    return (
      <div className="counter">
        Current counter's value: <span className="counter__value">{this.state.value}</span>
        <br />
        <button className="counter__decrement-button" onClick={this.decrement}>
          -
        </button>
        <button className="counter__increment-button" onClick={this.increment}>
          +
        </button>
        <br />
        <button className="counter__reset-button" onClick={this.reset}>
          reset
        </button>
      </div>
    )
  }
}

export default Counter
