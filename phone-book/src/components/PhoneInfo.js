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
    const {
      id, name, phoneNumber
    } = this.props.info
    
    return (
      <div class="phone-info">
        <div><b>{name}</b></div>
        <div>{phoneNumber}</div>
      </div>
    )
  }
}

export default PhoneInfo