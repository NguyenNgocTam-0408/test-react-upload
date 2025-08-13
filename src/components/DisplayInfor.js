import React from "react";
 class DisplayInfor extends React.Component {
   render() {
     console.log(this.props);
         const { listUser } = this.props;
         console.log("listUser", listUser);

     return (
       <div>
        { listUser.map((user) =>
        {
            return (
                <div>
                    <div> my name is {user.name}</div>
                    <div> my address is {user.address}</div>
                    <div> my age is {user.age}</div>
                </div>
            )

        })

        }
        {/* <div> my name is {name}</div>
        <div> my address is {address}</div>
        <div> my age is {age}</div>
        <hr />
          <div> my name is {name}</div>
        <div> my address is {address}</div>
        <div> my age is {age}</div>
        <hr />
          <div> my name is {name}</div>
        <div> my address is {address}</div>
        <div> my age is {age}</div> */}
       </div>
     );
   }
 }
export default DisplayInfor;    