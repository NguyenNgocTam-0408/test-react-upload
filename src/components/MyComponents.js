import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    
    state = { listUser: [
        { id: 1, name: "Tam", address: "Ha Noi", age: 25 },
        { id: 2, name: "Phuong", address: "Sai Gon", age: 21 },
        { id: 3, name: "An", address: "Da Nang", age: 19 }
    ]}
  render() {
    return (
      <div>
         
        
        <UserInfor />
        <br /><hr />
        <DisplayInfor listUser={this.state.listUser} />
        <hr />
      </div>
    );
  }
}
export default MyComponent;