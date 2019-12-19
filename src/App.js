// import React from 'react';
import React, { Component } from "react";
import "./App.css";
import * as math from "mathjs";
// import { className } from 'postcss-selector-parser';

// class App extends React.omponent {
class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      equation: "",
      history: []
    };
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.operators = ["+", "-", "*", "/", "=", "C"];
  }

  NumberClick = number => {
    this.setState({ equation: this.state.equation + number });
  };
  OperatorClick = operator => {
    if (operator === "=") {
      let histo = [...this.state.history];
      histo.push(this.state.equation);
      debugger;
      this.setState({
        history: histo,
        equation: "",
        result: math.evaluate(this.state.equation)
      });
    } else if (operator === "C") {
      this.setState({ result: 0 });
      this.setState({ equation: "" });
    } else {
      this.setState({ equation: this.state.equation + operator });
    }
  };

  render() {
    let h = [...this.state.history];

    return (
      <div className="App">
        <h1>Calculator App</h1>
        <div>
          {this.numbers.map((number, index) => {
            // map return number , index

            return (
              <button onClick={() => this.NumberClick(number)} key={index}>
                {number}
              </button>
            );
          })}
        </div>
        <div>
          {this.operators.map((operator, index) => {
            return (
              <button key={index} onClick={() => this.OperatorClick(operator)}>
                {operator}
              </button>
            );
          })}
        </div>
        <div>
          <p>The Result is : {this.state.result}</p>
          <p>The Equation is : {this.state.equation}</p>
          <p>The history is : {h[h.length - 1]}</p>
          <table style={{ border: "1px  solid black" }}>
            <thead>
              <tr>
                <th>The history is:</th>
              </tr>
            </thead>
            <tbody>
              {h.reverse().map((e, i) => (
                <tr key={i}>
                  <td> {e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
