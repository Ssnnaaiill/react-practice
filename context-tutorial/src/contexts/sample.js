import React, { Component, createContext } from "react";

// create context using createContext
// createContext returns Provider and Customer components
// Provider: sets context value, Customer: gets context value
const Context = createContext();
const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
  // set default value
  state = {
    value: ""
  }

  actions = {
    setValue: (value) => {
      this.setState({value});
    }
  }

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

// use HOC
function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <SampleConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent value={state.value} setValue={actions.setValue}/>
          )
        }
      </SampleConsumer>
    )
  }
}

export {
  SampleProvider,
  SampleConsumer,
  useSample
};