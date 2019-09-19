import React, { Component } from "react";
import { useSample } from "../contexts/sample";

class Sends extends Component {

  state = {
    input: ""
  }

  componentDidMount() {
    // set initial value
    this.setState({ input: this.props.value });
  }
  
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.props.setValue(this.state.input);
      this.setState({ input: "" });
    } else {
      alert("값이 입력되지 않았어요!");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        설정할 값을 입력해 주세요!
        <input value={this.state.input} onChange={this.handleChange}/>
        <button type="submit" className="fun-btn">submit</button>
      </form>
    );
  }
}

export default useSample(Sends);