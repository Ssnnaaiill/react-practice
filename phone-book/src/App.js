import React, { Component } from "react"
import PhoneForm from "./components/PhoneForm"
import PhoneInfoList from "./components/PhoneInfoList"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./App.css"

// check if phone number format is `010-nnnn-nnnn`
function isValidPhoneNumber(phoneNumber) {
  let regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/
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

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }


  /**
   * handleCreate
   * create info object
   */

  handleCreate = (data) => {
    // check if given name and phone number is null
    if (data.name != null && data.phoneNumber !== null) {
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
      alert("이름과 전화번호를 모두 입력해주세요!")
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


  /**
   * handleUpdate
   * change name or phone number
   */

  handleUpdate = (id, data) => {
    const { information } = this.state
    this.setState({
      information: information.map(
        // if id matches, create new info
        info => id === info.id ? { ...info, ...data } : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state
    let filteredList = []
    if (keyword != null) {
      filteredList = information.filter(
        info => info.name.indexOf(keyword) !== -1
      )
    } else {
      filteredList = information
    }
    return (
      <div id="phone-book">
        <h1>
          <span role="img" aria-label="penguin">🐧</span>전화번호부<span role="img" aria-label="rainbow">🌈</span>
        </h1>
        <div id="container">
        <p><PhoneForm onCreate={this.handleCreate}/></p>
        <div id="search">
          <p>
            <input placeholder="검색할 이름을 입력하세요!" onChange={this.handleChange} value={keyword}/>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faSearch}/>
          </p>
        </div>
        <p><hr/></p>
        <h3>현재 등록된 연락처</h3>
        <PhoneInfoList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}></PhoneInfoList>
        </div>
        <p>
          <a id="copywrite" href="https://github.com/Ssnnaaiill/react-practice/tree/feature/phone-book-app/phone-book">
            <FontAwesomeIcon icon={faGithub}/>&nbsp;
            @Ssnnaaiill phone-book
          </a>
        </p>
      </div>
    )
  }
}

export default App