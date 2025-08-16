import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    

    state = { listUser: [
        { id: 1, name: "Tam", address: "Ha Noi", age: 25 },
        { id: 2, name: "Phuong", address: "Sai Gon", age: 21 },
        { id: 3, name: "An", address: "Da Nang", age: 17}
    ]}
    handleAddnewUser = (userObj) => {
      console.log(userObj);
      this.setState(prevState => ({
        listUser: [userObj,...prevState.listUser ]
      }));
    }
  render() {
    return (
      <div>


        <AddUserinfor 
         handleAddnewUser={this.handleAddnewUser} />
        <br /><hr />
        <DisplayInfor listUser={this.state.listUser}
        
         />
       
        <hr />
      </div>
    );
  }
}
export default MyComponent;