import React from "react";

// create HOC (useConsumer)
const createUseConsumer = (Consumer) => (mapContextToProps) => (WrappedComponent) => {
  // if mapContextToProp does not exist, just send context to props
  const defaultMapContextToProps = (context) => ({context});

  function UseConsumer(props) {
    return (
      <Consumer>
        {
          context => {
            // get value from context
            const contextProps = (mapContextToProps || defaultMapContextToProps)(context);
            return (
              <WrappedComponent {...contextProps} {...props}/>
            );
          }
        }
      </Consumer>
    )
  }

  // set display name
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "component";
  UseConsumer.displayName = `UseConsumer(${displayName})`;
  return UseConsumer;
}

export default createUseConsumer;