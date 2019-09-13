import React, { Component } from 'react'

const Problematic = () => {
  throw (new Error("A bug has been found!"))
  return (
    <div>

    </div>
  )
}

class Counter extends Component {
  state = {
    number: 0
  }


  /* Component LifeCycle APIs */


  /****************
   * Initial Create
   ****************/


  /**
   * Component constructor
   * constructor is called every time when component is created
   */
  
   constructor(props) {
    super(props)
    console.log("constructor")
  }

  // componentWillMount() {
  //   console.log("componentWillMount (deprecated)")
  // }


  /**
   * componentDidMount
   * - interlink external libraries (D3, masonry, ...)
   * - jobs related to DOM
   * - get required data for component (Ajax, GraphGL, ...)
   */

  componentDidMount() {
    console.log("componentDidMount")
  }


  /****************
   * Update
   ****************/


  shouldComponentUpdate(nextProps, nextState) {
    // do not re-render when multiple of 5
    console.log("shouldComponentUpdate")
    if (nextState.number % 5 === 0) {
      return false
    } else {
      return true
    }
  }

  
  /**
   * componentWillUpdate
   * - called only when shouldComponentUpdate returned true
   * - reset animation effects
   * - remove event listeners
   * - render will be called after this api has been called
   * @param {*} prevProps
   * @param {*} prevState
   */

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate (deprecated)")
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
  }


  /****************
   * Catch Error
   ****************/

  componentDidCatch(error, info) {
    this.setState({
      error: true
    })
  }

  /**
   * buttons
   * - handleEncrease
   * - handleDecrease
   */

  // increase 1 number in state
  handleEncrease = () => {
    // setState : change status of variables that are returned to object
    const { number } = this.state;
    this.setState({
      number: number + 1
    })
  }

  // decrease 1 number in state
  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    )
  }

  /* render */
  render() {

    if (this.state.error) {
      return <h1>Something has been wrong!</h1>
    }

    return (
      <div>
        <h1>Counter</h1>
        <div>value = {this.state.number}</div>
        { this.state.number === 4 && <Problematic/> }
        <button onClick={this.handleEncrease}>[ + ]</button>
        <button onClick={this.handleDecrease}>[ - ]</button>
      </div>
    )
  }
}

export default Counter