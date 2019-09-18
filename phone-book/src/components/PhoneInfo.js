import React, { Component } from "react"
import { faTrash, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class PhoneInfo extends Component {


  /**
   * info
   * - id: primary key
   * - name: name
   * - phoneNumber: phone number
   */

  // defaultProps in case when info from PhoneFrom is not delivered
  static defaultProps = {
    info: {
      id: 0,
      name: "name",
      phoneNumber: "010-0000-0000"
    }
  }
  
  /**
   * state
   * - editing: true if edit button is clicked, default false
   * - name
   * - phoneNumber
   */

  state = {
    editing: false,
    name: null,
    phoneNumber: null
  }

  // remove phone number by id
  handleRemove = () => {
    const { info, onRemove } = this.props
    if(window.confirm(info.name + "의 전화번호를 정말 삭제하실 건가요?")) {
      onRemove(info.id)
    }
  }

  // handleToggleEdit: set editing false
  handleToggleEdit = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  // called when onChange event has occured in input
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  /**
   * componentDidUpdate
   * This logic is for specific situations - when value of editing has been changed
   * - When edit button is clicked, the original values appear in input
   * - When edit is confirmed, given input values are delivered to parent component
   * @param {*} prevProps 
   * @param {*} prevState 
   */

  componentDidUpdate(prevProps, prevState) {
    const{ info, onUpdate } = this.props
    if(!prevState.editing && this.state.editing) {
      // put info values in state when editing has been changed from false to true
      this.setState({
        name: info.name,
        phoneNumber: info.phoneNumber
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // do not rerender if it is not edit mode and info value is same
    if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
      return false
    } else {
      return true
    }
  }
  
  render() {
    const { editing } = this.state
    
    if (!editing) {
      // if not editing
      const {
        name, phoneNumber
      } = this.props.info

      return (
        <div class="phone-info">
          <div><b>{name}</b></div>
          <div>{phoneNumber}</div>
          <button class="info-fun-btn" onClick={this.handleToggleEdit}><FontAwesomeIcon icon={faPencilAlt}/></button>
          &nbsp;
          <button class="info-fun-btn" onClick={this.handleRemove}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
      )
    } else {
      // edit mode
      return (
        <div class="phone-info">
          <div><input value={this.state.name} name="name" placeholder="이름" onChange={this.handleChange}/></div>
          <div><input value={this.state.phoneNumber} name="phoneNumber" placeholder="전화번호" onChange={this.handleChange}/></div>
          <button class="info-fun-btn" onClick={this.handleToggleEdit}><FontAwesomeIcon icon={faCheck}/></button>
          &nbsp;
          <button class="info-fun-btn" onClick={this.handleRemove}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
      )
    }
  }
}

export default PhoneInfo