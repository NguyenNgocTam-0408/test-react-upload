import ModalCreateUser from "./ModelsCreateUser";



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
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default ManageUser;