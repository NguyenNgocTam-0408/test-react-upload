import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
import { use } from "react";
// class MyComponent extends React.Component {
    

//     state = { listUser: [
//         { id: 1, name: "Tam", address: "Ha Noi", age: 25 },
//         { id: 2, name: "Phuong", address: "Sai Gon", age: 21 },
//         { id: 3, name: "An", address: "Da Nang", age: 17}
//     ]}
//     handleAddnewUser = (userObj) => {
//       console.log(userObj);
//       this.setState(prevState => ({
//         listUser: [userObj,...prevState.listUser ]
//       }));
//     }
//     handleOnClickDelete = (userId) => {
//     let listUserclone = this.state.listUser;
//     listUserclone = listUserclone.filter((item) => item.id !== userId);
//     this.setState({
//       listUser: listUserclone
//     });
//   }
//   render() {
//     return (
//       <>
//       <div className='a'>


//         <AddUserinfor 
//          handleAddnewUser={this.handleAddnewUser} />
//         <br /><hr />
//         <DisplayInfor listUser={this.state.listUser}
//           handleOnClickDelete={this.handleOnClickDelete}
//          />
       
//         <hr />
//       </div>
//       <div className='b'>
//       </div>
//       </>
//     );
//   }
// }
const MyComponent = (props) =>{
  const [listUser, setListUser] = useState([
    { id: 1, name: "Tam", address: "Ha Noi", age: 25 },
    { id: 2, name: "Phuong", address: "Sai Gon", age: 21 },
    { id: 3, name: "An", address: "Da Nang", age: 17}
  ]);
   const handleAddnewUser = (userObj) => {
     setListUser([userObj, ...listUser]);
   }
   const handleOnClickDelete = (userId) => {
     setListUser(listUser.filter((item) => item.id !== userId));
   }
    return (
      <>
      <div className='a'>
        <AddUserinfor 
         handleAddnewUser={handleAddnewUser} />
        <br /><hr />
        <DisplayInfor listUser={listUser}
          handleOnClickDelete={handleOnClickDelete}
         />
       
        <hr />
      </div>
      <div className='b'>
      </div>
      </>
    );
  }
export default MyComponent;