import React, { Component } from 'react';

class App extends Component {

  state = {
    SplitMe: null
  }

  handleClick = () => {
    // return promise
    // must set default as dynamic import calls module as CommonJS asynchronously
    // warning: dynamic import is not standard yet...
    import('./SplitMe').then(({ default: SplitMe }) => {
      this.setState({
        SplitMe
      });
    });
  }

  render() {
    const { SplitMe } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        { SplitMe && <SplitMe /> }
      </div>
    );
  }
}

export default App;