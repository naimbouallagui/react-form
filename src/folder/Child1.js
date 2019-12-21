import React, { Component } from "react";

const validEmailRegex = RegExp(
  /^(([^<>()\],;:\s@]+([^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i
);
class Child1 extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendData = this.sendData.bind(this);
    this.state = {
      inputField: "",
      email: "",
      password: "",
      errors: {
        inputField: "",
        email: "",
        password: ""
      }
    };
  }

  sendData = evt => {
    evt.preventDefault();
    const { errors, inputField, email, password } = this.state;
    if (errors.inputField !== "" || errors.email !== "" || errors.password !== "" || inputField === "" || email === "" || password === "") return;
    
    const { handlerFromParant } = this.props;

    handlerFromParant(this.state);
    this.setState({
      inputField: "",
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    event.preventDefault();
    // let name = event.target.name;
    // let value = event.target.value;
    const { name, value } = event.target;
    let errs = {}; //this.state.errors;
    const { errors } = this.state;
    
    switch (name) {
      case "inputField":
        errs.inputField =
          value.length < 8 ? "Full Name must be 8 characters long!" : "";
        break;
      case "email":
        errs.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errs.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({
      // [event.target.name]: event.target.value
      errors: { ...errors, ...errs },
      // errors: { inputField:"fhgfh", email:"",password:"abc", ...errs }, //1
      // errors: { inputField:"fhgfh",password:"abc", email:"abd@ddj.dd" },//2
      [name]: value
      // }, ()=> {
      // console.log(errors)
      
    });
  };
  

  render() {
    return (
      <div>
        <form>
          <input
            className="m-4"
            type="text"
            name="inputField"
            id="inputField"
            onChange={this.handleChange}
            noValidate
          />
          {/* <div>{ this.state.inputField.length > 8 ? 'OK' : 'atleast 8 caracter' }</div> */}
          <small className="d-block text-danger">
            {this.state.errors.inputField}
          </small>
          <input
            className="m-4"
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            noValidate
          />
          <small className="d-block text-danger">
            {this.state.errors.email}
          </small>
          {/* <div>{ this.state.email === regex ? 'OK' : 'ERROR' }</div> */}
          <input
            className="m-4"
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            noValidate
          />
          <small className="d-block text-danger">
            {this.state.errors.password}
          </small>
          {/* <div>{ this.state.password.length > 10 ? 'OK' : 'atleast 8 caracter' }</div> */}
          <input className="m-4" type="submit" onClick={this.sendData} />
        </form>
      </div>
    );
  }
}

export default Child1;
