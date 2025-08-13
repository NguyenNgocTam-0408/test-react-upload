import React from "react";
class MyComponent extends React.Component {
    state = {
    name: 'Eric',
    address: "hoid dan IT",
    age: 26
  };
  handleclick(event)
  {
    console.log(">>>click me button");
    console.log("ramdom", );

    this.setState({
      name: 'Tam',
        age: Math.floor((Math.random() * 100)+1)
    });
  }
  handleOnMouseOver(event) {
  console.log("di chuyet vao toi")
}
  render() {
    return (
      <div>
         
         My name is {this.state.name}, I am {this.state.age} years old, I live in {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={(event)=> {this.handleclick(event)}}>click me</button>
      </div>
    );
  }
}
export default MyComponent;