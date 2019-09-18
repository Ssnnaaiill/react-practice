import React, { Component } from "react"
import PhoneInfo from "./PhoneInfo"

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined")
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data
  }

  render() {
    const { data, onRemove, onUpdate } = this.props
    // make a list of phone number informations
    // information primary key is `id` -> must be needed when array rendering
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate}/>)
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