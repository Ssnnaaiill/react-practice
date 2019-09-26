import React, { Component } from 'react';

class User extends Component {
  
  shouldComponentUpdate(prevProps, prevState) {
    return this.props.user !== prevProps.user;
  }
  render() {
    const { user: { username } } = this.props;
    console.log('%s is being rendered', username);

    return (
      <div className="user">
        {username}
      </div>
    );
  }
}

export default User;