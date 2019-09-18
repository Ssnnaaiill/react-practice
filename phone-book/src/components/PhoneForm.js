import React, { Component } from "react"

/**
 * PhoneForm
 * - id: 0
 * - name: "name", s
 * - phoneNumber: "010-0000-0000"
 */

class PhoneForm extends Component {
  state = {
    name: "",
    phoneNumber: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // block page reloading
    e.preventDefault();

    // send props to parent component(App) by onCreate
    this.props.onCreate(this.state)
    
    // reset status
    this.setState({
      name: "",
      phoneNumber: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p><input placeholder="name" value={this.state.name} onChange={this.handleChange} name="name"></input></p>
          <p><input placeholder="phone number" value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber"></input></p>
        </div>
        <button type="submit">등록</button>
        <div>{this.state.name} {this.state.phoneNumber}</div>
      </form>
    )
  }
}

export default PhoneForm