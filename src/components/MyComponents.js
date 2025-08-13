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
  handleOnChangeInput = (event) =>{
    this.setState({
      name: event.target.value,
    });
  }
  handleOnSubmit = (event) => {
    alert('Form submitted');
  }
  render() {
    return (
      <div>
         
         My name is {this.state.name}, I am {this.state.age} years old, I live in {this.state.address}
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
            <input type='text'
            onChange={(event)=>{this.handleOnChangeInput(event)}}/>
            <button> submit</button>
        </form>

      </div>
    );
  }
}
export default MyComponent;