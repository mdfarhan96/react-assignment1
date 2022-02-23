import React from "react";
import No from "./functionalcomp/functional";
import Yes from "./classcomp/class";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFunctionCalled: false,
      isClassCalled: false,
    };
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
  }
  button1() {
    this.setState((state) => ({
      isFunctionCalled: !state.isFunctionCalled,
    }));
  }
  button2() {
    this.setState((state) => ({
      isClassCalled: !state.isClassCalled,
    }));
  }
  render() {
    return (
      <div className="main-container">
        <h1> Styling using Functional and Class Components :</h1>
        <div className="container">
          <button onClick={this.button1} className="button1">
            To see styling in Functional Components
          </button>
          <button onClick={this.button2} className="button2">
            To see styling in Class Components
          </button>
        </div>
        <div className="dyanamic-container">
          {this.state.isFunctionCalled ? <No /> : <></>}
          {this.state.isClassCalled ? <Yes /> : <></>}
        </div>
      </div>
    );
  }
}

export default App;
