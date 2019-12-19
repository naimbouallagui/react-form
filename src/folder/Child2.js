import React, { Component } from "react";
// import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Child2 extends Component {
//   constructor(props) {
//     super(props);
//     debugger
//     this.state = {
//       tabUsers: this.props.tabUsersParent
//     };
//   }
//   static getDerivedStateFromProps(props) {
//       debugger
//     return { tabUsers: props.tabUsersParent };
//   }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Input Filed</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.tabUsers.map((user, i) => { */}
            {this.props.tabUsersParent.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.inputField}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
