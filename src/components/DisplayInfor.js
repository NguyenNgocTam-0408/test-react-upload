import React from "react";
import './Displayinfor.scss';
import logo from '../logo.svg';
 class DisplayInfor extends React.Component {
  state = {
    isShowlistUser: true,
  }
  handleShowhide = ()=>{
        this.setState({
          isShowlistUser: !this.state.isShowlistUser
        })
      }
  

   render() {
     console.log(this.props);
         const { listUser } = this.props;
        //  console.log(listUser);

     return (
       <div className="display-infor-container"> 
                 <img src={logo} className="img" alt="logo" />
        <div>
          <span onClick={()=> {this.handleShowhide()}}> 
            {this.state.isShowlistUser === true ? "hide list user" : "show list user"} </span>
        </div>
        {this.state.isShowlistUser && 
          <>
          { listUser.map((user, index) =>
          {
            console.log("check map user", user );
            return(
              <div key={user.id} className={user.age>18 ? "green": "red"}>
                    <div>
                      <div> my name is {user.name}</div>
                      <div> my address is {user.address}</div>
                      <div> my age is {user.age}</div>
                    </div>
                    <div>
                      <button onClick={() => this.props.handleOnClickDelete(user.id)}>Delete</button>
                    </div>
              </div>
            );
          })
          }
       </>
   }
       </div>
     );
   }
 }
export default DisplayInfor;    