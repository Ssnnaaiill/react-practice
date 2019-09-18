import React, { Component } from "react"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class PhoneInfo extends Component {


  /**
   * info
   * @author kinew
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

  handleRemove = () => {
    const { info, onRemove } = this.props
    if(window.confirm(info.name + "의 전화번호를 정말 삭제하실 건가요?")) {
      onRemove(info.id)
    }
  }
  
  render() {
    const {
      name, phoneNumber
    } = this.props.info
    
    return (
      <div class="phone-info">
        <div><b>{name}</b></div>
        <div>{phoneNumber}</div>
        <button class="info-fun-btn" onClick={this.handleRemove}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    )
  }
}

export default PhoneInfo