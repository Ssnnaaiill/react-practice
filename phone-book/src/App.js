import React, { Component } from "react"
import PhoneForm from "./components/PhoneForm"
import PhoneInfoList from "./components/PhoneInfoList"

class App extends Component {
  id = 2
  state = {
    // default informations
    information: [
      {
        id: 0,
        name: "kinew",
        phoneNumber: "010-0000-0000"
      },
      {
        id: 1,
        name: "condencia",
        phoneNumber: "010-0000-0001"
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state
    this.setState({
      // add information data (Phoneinfo)
      information: information.concat({
        id: this.id++,
        ...data })
    })
  }

  render() {
    const { information } = this.state
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList data={this.state.information}></PhoneInfoList>
      </div>
    )
  }
}

export default App