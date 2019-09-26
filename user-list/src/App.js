import React, { Component } from 'react';
import UserList from "./components/UserList";
import './App.css';

class App extends Component {

  id = 3;

  state = {
    input: '',
    users: [
      {
        id: 1,
        username: '키뉴'
      },
      {
        id: 2,
        username: '퐁듀'
      }
    ]
  };

  // get input value from user
  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  
  /**
   * onButtonClick : Defines tasks when submit button is clicked
   * - add user with given username and 1 increased id
   * - clear input value in input form
   */

  onButtonClick = (e) => {
    this.setState(
      ({ input, users }) => (
        {
          input: '',
          users: users.concat(
            {
              id: this.id++,
              username: input
            }
          )
        }
      )
    );
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.onButtonClick();
    }
  }

  render() {
    const { onChange, onButtonClick, onKeyPress } = this;
    const { input, users } = this.state;

    return (
      <div>
        <h1>사용자 목록</h1>
        <div id="container">
          <div id="form">
            <input value={input} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onButtonClick}>add</button>
          </div>
          <div id="userlist">
            <UserList users={users}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;