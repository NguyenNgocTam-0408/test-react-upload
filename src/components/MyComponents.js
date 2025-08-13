import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    
  render() {
    const myInfor = ['a','v','c']
    return (
      <div>
         
        
        <UserInfor />
        <br /><hr />
        <DisplayInfor name="Tam" address="Ha Noi" age={25} />
        <hr />
        <DisplayInfor name="phuong " address="sai gon" age={21} myInfor={myInfor} />
      </div>
    );
  }
}
export default MyComponent;