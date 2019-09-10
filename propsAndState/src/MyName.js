import React, { Component } from 'react'

class MyName extends Component {
  render() {
    return (
      <div>
        This is a story of {this.props.name}.
      </div>
    )
  }
}

MyName.defaultProps = {
  name: "Periwinkle Blue"     // default name
};

export default MyName