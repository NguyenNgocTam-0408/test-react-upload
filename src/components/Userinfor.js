import React from 'react';
class UserInfor extends React.Component {
        state = {
    name: 'Eric',
    address: "hoid dan IT",
    age: 26
  };
 
  handleOnMouseOver(event) {
  console.log("di chuyet vao toi")

  }
  handleOnChangeInput = (event) =>{
    this.setState({
      name: event.target.value,
    });
  }
  handleOnChangeAge = (event) =>{
    this.setState({
      age: event.target.value,
    });
  }
  handleOnSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    alert('Form submitted');
  }
  render() {
    return (
      <div>
        I'm a child component
         My name is {this.state.name}, I am {this.state.age} years old, I live in {this.state.address}
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
            <label>Name:</label>
            <input 
            value = {this.state.name}
            type='text'
            onChange={(event)=>{this.handleOnChangeInput(event)}}/>
            <button> submit</button>
        </form>

         <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
            <label>Age:</label>
            <input 
            value = {this.state.age}
            type='text'
            onChange={(event)=>{this.handleOnChangeAge(event)}}/>
            <button> submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;