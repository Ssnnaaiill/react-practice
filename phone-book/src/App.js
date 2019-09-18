import React, { Component } from "react"
import PhoneForm from "./components/PhoneForm"

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'kinew',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'condencia',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state
    this.setState({
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
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;