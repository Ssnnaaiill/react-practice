import React from 'react'
import { Component } from 'react'

class Counter extends Component {
  state = {
    number: 0
  }

  // increase 1 number in state
  handleEncrease = () => {
    // setState : change status of variables in state{}
    this.setState({
      number: this.state.number + 1
    })
  }

  // decrease 1 number in state
  handleDecrease = () => {
    this.setState({
      numbeR: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>value = {this.state.number}</div>
        <button onClick={this.handleEncrease}>[ + ]</button>
        <button onClick={this.handleDecrease}>[ - ]</button>
      </div>
    )
  }
}

export default Counter