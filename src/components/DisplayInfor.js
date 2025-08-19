import React from "react";
import './Displayinfor.scss';
import logo from '../logo.svg';
 class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">> check consstructor: 1")
    super(props);
    this.state = {
      isShowlistUser: true,
    };
  }
  handleShowhide = ()=>{
        this.setState({
          isShowlistUser: !this.state.isShowlistUser
        })
      }
  
  componentDidMount()
  {
    console.log("Component did mount");
    setTimeout(() => {
      document.title = "TAm hoc react"
    }, 3000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update",this.props);
    if(this.props.listUser !== prevProps.listUser) {
      if(this.props.listUser.length > 5) {
        alert('ban dax dang ki 5 thanh vien')
  }}}

   render() {
    console.log(">> check render: 2");
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