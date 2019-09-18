import React, { Component } from "react"

/**
 * PhoneForm
 * - id: 0
 * - name: "name", s
 * - phoneNumber: "010-0000-0000"
 */

class PhoneForm extends Component {
  state = {
    name: null,
    phoneNumber: null
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
      <form id="phone-form" onSubmit={this.handleSubmit}>
        <div id="phone-form-input">
          <input placeholder="이름" value={this.state.name} onChange={this.handleChange} name="name"></input>
          <br/>
          <input placeholder="전화번호" value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber"></input>
        </div>
        <div id="submit-button">
          <button class="fun-btn" type="submit">submit</button>
        </div>
        <div>{this.state.name} {this.state.phoneNumber}</div>
      </form>
    )
  }
}

export default PhoneForm