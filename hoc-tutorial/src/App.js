import React, { Component } from 'react';
import Post from './Post';
import Comments from './Comments';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Post</h1>
        <Post />
        <h2>Comments</h2>
        <Comments />
      </div>
    );
  }
}

export default App;