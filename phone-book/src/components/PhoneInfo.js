import React, { Component } from 'react'

class PhoneInfo extends Component {


  /**
   * info
   * @author kinew
   * - id: primary key
   * - name: name
   * - phoneNumber: phone number
   */

  static defaultProps = {
    info: {
      id: 0,
      name: "name",
      phoneNumber: "010-0000-0000"
    }
  }
  
  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    }

    const {
      id, name, phoneNumber
    } = this.props.info
    
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phoneNumber}</div>
      </div>
    )
  }
}

export default PhoneInfo