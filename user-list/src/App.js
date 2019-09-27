import React, { Component } from 'react';
import UserList from "./components/UserList";
import './App.css';
import { List, Record } from 'immutable';

// create record for user
const User = Record({
  id: null,
  username: null
});

// create record for data
const Data = Record({
  input: '',
  users: List()
});

class App extends Component {

  id = 3;

  state = {
    data: Data({
      input: '',
      users: List([
        User({
          id: 1,
          username: '키뉴'
        }),
        User({
          id: 2,
          username: '퐁듀'
        })
      ])
    })
  };

  // get input value from user
  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set('input', value)
    });
  }

  
  /**
   * onButtonClick : Defines tasks when submit button is clicked
   * - add user with given username and 1 increased id
   * - clear input value in input form
   */

  onButtonClick = (e) => {
    const { data } = this.state;

    this.setState({
      data: data.set('input', '').update('users', users => users.push(new User({
        id: this.id++,
        username: data.input
      })))
    });
  }

  // can also submit by pressing Enter key
  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.onButtonClick();
    }
  }

  render() {
    const { onChange, onButtonClick, onKeyPress } = this;
    const { data: { input, users } } = this.state;

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