import React, { Component } from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Calculatrice extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      equation: "",
      history: []
    };
  }

  equationClick = e => {
    this.setState({ equation: this.state.equation + e.target.id });
  };
  calculEquation = e => {
    this.state.history.push(this.state.equation)
    this.setState({
      result: eval(this.state.equation),
      history: this.state.history,
      equation:  eval(this.state.equation)
    });
  };

  render() {
    return (
      <div className="App" >
      <div className="container">
        
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>Calculator App</h1>
        <input class="mb-3" type="text" style={{marginLeft: '20%'}} value={this.state.equation} />
        <div className="row">
        <table class="col-md-1" style={{marginLeft: '21%'}}>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                  
                <button  type="button" className="btn btn-secondary" id="7" onClick={this.equationClick}>7</button>
                
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="8" onClick={this.equationClick}>8</button>
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="9" onClick={this.equationClick}>9</button>
              </td>
              <td>
                <button  type="button" className="btn btn-danger" id="*" onClick={this.equationClick}>*</button>
              </td>
            </tr>
            <tr>
              <td>
                <button  type="button" className="btn btn-secondary" id="4" onClick={this.equationClick}>4</button>
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="5" onClick={this.equationClick}>5</button>
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="6" onClick={this.equationClick}>6</button>
              </td>
              <td>
                <button  type="button" className="btn btn-danger" id="/" onClick={this.equationClick}>/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button  type="button" className="btn btn-secondary" id="1" onClick={this.equationClick}>1</button>
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="2" onClick={this.equationClick}>2</button>
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="3" onClick={this.equationClick}>3</button>
              </td>
              <td>
                <button  type="button" className="btn btn-danger" id="+" onClick={this.equationClick}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button  type="button" className="btn btn-secondary" id="0" onClick={this.equationClick}>0</button>
              </td>
              <td>
                <button  type="button" className="btn btn-secondary" id="." onClick={this.equationClick}>.</button>
              </td>
              <td>
                <button  type="button" className="btn btn-danger" id="-" onClick={this.equationClick}>-</button>
              </td>
              <td>
                <button  type="button" className="btn btn-success" onClick={this.calculEquation}>=</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="row" >
          <table class="col-md-2"  border="1">
            <tbody>
              {this.state.history && this.state.history.map((equation, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <a>{equation}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
}

export default Calculatrice;
