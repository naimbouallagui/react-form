import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component {
  /*
componentWillMount() {

}

componentDidUpdate() {

}
componentWillUpdate() {

}
componentDidMount() {

}

componentWillUnmount() {

}
*/

  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      tabUsers: []
    };
  }

  handleData(data) {
    // this.state.tabUsers.push(data); // wrong
    const { tabUsers } = this.state; // destructing
    this.setState(oldState => {
      return { tabUsers: [...oldState.tabUsers, data] };
    });
    console.log(tabUsers);
  }
  render() {
    const { tabUsers } = this.state; // destructing
    return (
      <div>
        <Child1 handlerFromParant={this.handleData} />
        <Child2 tabUsersParent={tabUsers} />
      </div>
    );
  }
}
export default Parent;
