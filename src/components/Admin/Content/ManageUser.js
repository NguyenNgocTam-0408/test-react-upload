import ModalCreateUser from "./ModelsCreateUser";
import './ModelsCreateUser.scss';


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">

            </div>
            <div className="user-content">
                <div>
                    <button>add new user</button>
                </div>
                <div>
                    table user
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser;