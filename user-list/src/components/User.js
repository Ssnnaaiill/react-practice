import React, { Component } from 'react';

class User extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }

  render() {
    const { username } = this.props.user.toJS();
    console.log('%s is being rendered', username);

    return (
      <div className="user">
        {username}
      </div>
    );
  }
}

export default User;