import React from "react";
class MyComponent extends React.Component {
    state = {
    name: 'Eric',
    address: "hoid dan IT",
    age: 26
  };
  render() {
    return (
      <div>
         My name is {this.state.name}, I am {this.state.age} years old, I live in {this.state.address}
      </div>
    );
  }
}
export default MyComponent;