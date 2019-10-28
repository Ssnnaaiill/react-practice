import React, { Component } from 'react';

class HistorySample extends Component {
  // go back
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // go to home
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    // ask if user surely wants to leave when page is about to change
    this.unblock = this.props.history.block('Are you really going to leave?');
  }

  componentWillUnmount() {
    // stop asking when component is unmounted
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
