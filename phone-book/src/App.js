import React, { Component } from "react"
import PhoneForm from "./components/PhoneForm"
import PhoneInfoList from "./components/PhoneInfoList"
import "./App.css"

// check if phone number format is `010-nnnn-nnnn`
function isValidPhoneNumber(phoneNumber) {
  let regExp =/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/
  if (regExp.test(phoneNumber)) {
    return true
  } else {
    return false
  }
}

class App extends Component {
  id = 2
  state = {
    // default informations
    information: [
      {
        id: 0,
        name: "시날까기 인형",
        phoneNumber: "010-0000-0000"
      },
      {
        id: 1,
        name: "허리아픈 애",
        phoneNumber: "010-0000-0001"
      }
    ]
  }


  /**
   * handleCreate
   * create info object
   */

  handleCreate = (data) => {
    // check if given name is null
    if (data.name !== null) {
      // check if given phone number is null
      if (data.phoneNumber !== null) {
        // check if given phone number is valid
        if (isValidPhoneNumber(data.phoneNumber) !== false) {
          const { information } = this.state
          this.setState({
            // add information data (Phoneinfo)
            information: information.concat({
              id: this.id++,
              ...data
            })
          })
        } else {
          alert("전화번호 형식이 올바르지 않아요!")
        }
      } else {
        alert("전화번호를 입력해주세요!")
      }
    } else {
      alert("이름을 입력해주세요!")
    }
  }


  /**
   * handleRemove
   * delete info object with given id
   */

   handleRemove = (id) => {
     const { information } = this.state
     this.setState({
       information: information.filter(info => info.id !== id)
     })
   }

  render() {
    return (
      <div id="phone-book">
        <h1>
          <span role="img" aria-label="penguin">🐧</span>전화번호부<span role="img" aria-label="rainbow">🌈</span>
        </h1>
        <div id="container">
        <p><PhoneForm onCreate={this.handleCreate}/></p>
        <p><hr/></p>
        <PhoneInfoList data={this.state.information} onRemove={this.handleRemove}></PhoneInfoList>
        </div>
      </div>
    )
  }
}

export default App