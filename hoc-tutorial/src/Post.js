import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    data: null
  }

  async initialize() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      this.setState({
        data: response.data
      });
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return null;
    } else {
      return (
        <div>
          { JSON.stringify(data) }
        </div>
      );
    }
  }
}

export default Post;