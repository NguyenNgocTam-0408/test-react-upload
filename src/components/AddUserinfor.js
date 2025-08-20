import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//         state = {
//     name: 'Eric',
//     address: "hoid dan IT",
//     age: 26
//   };
 
//   handleOnMouseOver(event) {
//   console.log("di chuyet vao toi")

//   }
//   handleOnChangeInput = (event) =>{
//     this.setState({
//       name: event.target.value,
//     });
//   }
//   handleOnChangeAge = (event) =>{
//     this.setState({
//       age: event.target.value,
//     });
//   }
//   handleOnChangeAddress = (event) =>{
//     this.setState({
//       address: event.target.value,
//     });
//   }
//   handleOnSubmit = (event) => {
//     event.preventDefault(); // Ngăn chặn hành động mặc định của form
//     this.props.handleAddnewUser({
//       id: Math.floor((Math.random() * 100)+1)+ '-random', // Tạo ID ngẫu nhiên
//       name: this.state.name,
//       age: this.state.age,
//       address: this.state.address
//     });
//   }
//   render() {
//     return (
//       <div>
//         I'm a child component
//          My name is {this.state.name}, I am {this.state.age} years old, I live in {this.state.address}
//         <form >
//             <label>Name:</label>
//             <input 
//             value = {this.state.name}
//             type='text'
//             onChange={(event)=>{this.handleOnChangeInput(event)}}/>
//         </form>

//          <form >
//             <label>Age:</label>
//             <input 
//             value = {this.state.age}
//             type='text'
//             onChange={(event)=>{this.handleOnChangeAge(event)}}/>
          
//         </form>
//         <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//             <label>Address:</label>
//             <input 
//             value = {this.state.address}
//             type='text'
//             onChange={(event)=>{this.handleOnChangeAddress(event)}}/>
//             <button> submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('dai hoc quoc te hong bang');
  const [age, setAge] = useState('');

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  }

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  }

  const handleOnChangeAddress = (event) => { 
    setAddress(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddnewUser({
      id: Math.floor((Math.random() * 100) + 1) + '-random',
      name,
      age,
      address
    });
  }

  return (
    <div>
      I'm a child component<br />
      My name is {name}, I am {age} years old, I live in {address}
      
      <form onSubmit={handleOnSubmit}>
        <label>Name:</label>
        <input value={name} type="text" onChange={handleOnChangeInput} />

        <label>Age:</label>
        <input value={age} type="text" onChange={handleOnChangeAge} />

        <label>Address:</label>
        <input value={address} type="text" onChange={handleOnChangeAddress} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

      
export default AddUserInfor;