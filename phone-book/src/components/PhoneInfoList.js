import React, { Component } from "react"
import PhoneInfo from "./PhoneInfo"

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props
    // make a list of phone number informations
    // information primary key is `id` -> must be needed when array rendering
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}/>)
    )

    // return phone number list
    return (
      <div id="phone-info-list">
        {list}    
      </div>
    )
  }
}

export default PhoneInfoList