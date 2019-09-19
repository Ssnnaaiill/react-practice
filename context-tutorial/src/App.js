import React from "react";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import { SampleProvider } from "./contexts/sample";
import { AnotherProvider } from "./contexts/another";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Counter from "./components/Counter";

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);

function App() {
  return (
    <AppProvider contexts={[SampleProvider, AnotherProvider]}>
      <div id="context-tutorial">
        <h1>
          <span role="img" aria-label="squid">🦑</span> Context API Tutorial <span role="img" aria-label="octopus">🐙</span>
        </h1>
        <div id="container">
          <div className="panes">
            <LeftPane/>
            <RightPane/>
          </div>
          <hr/>
          <Counter/>
        </div>
        <p>
          <a id="copywrite" href="https://github.com/Ssnnaaiill/react-practice/tree/master/context-tutorial">
            <FontAwesomeIcon icon={faGithub}/>&nbsp;
            @Ssnnaaiill context-api-tutorial
          </a>
        </p>
      </div>
    </AppProvider>
  );
};

export default App;