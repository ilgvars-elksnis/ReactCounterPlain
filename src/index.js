import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class App extends React.Component {
  state = {
    counter: 1
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decreaseCounter}>DECREASE</button>
        <button onClick={this.resetCounter}>RESET</button>

        <button onClick={this.increaseCounter}>INCREASE</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
