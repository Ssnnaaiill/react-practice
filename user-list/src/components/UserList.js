import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  
  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.users !== this.props.users;
  }
  
  renderUsers = () => {
    const { users } = this.props;
    return users.map(
      (user) => (
        <h4><User key={user.id} user={user} /></h4>
      )
    );
  }

  render() {
    console.log('UserList is being rendered');
    const { renderUsers } = this;
    
    return (
      <div>
        { renderUsers() }
      </div>
    );
  }
}

export default UserList;