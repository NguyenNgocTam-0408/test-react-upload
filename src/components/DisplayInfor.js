import React from "react";
 class DisplayInfor extends React.Component {
   render() {
     console.log(this.props);
         const { age , name , address } = this.props;

     return (
       <div>
        <div> my name is {name}</div>
        <div> my address is {address}</div>
        <div> my age is {age}</div>
       </div>
     );
   }
 }
export default DisplayInfor;    