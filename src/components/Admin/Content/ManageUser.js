import { getValue } from "@testing-library/user-event/dist/utils";
import ModalCreateUser from "./ModelsCreateUser";
import './ModelsCreateUser.scss';
import { useState } from "react";


const ManageUser = (props) => {
    const [Showmodalcreateuser, setShowmodalcreateuser] = useState(false);
    const HandleShowHileModal = (value) => {
        setShowmodalcreateuser(value)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div>
                    <button className="btn btn-primary" onClick={() => setShowmodalcreateuser(true)}>add new user</button>
                </div>
                <div className="table-users-container">
                    table user
                </div>
                <ModalCreateUser show={Showmodalcreateuser}
                setShow={setShowmodalcreateuser} />
            </div>
        </div>
    )
}

export default ManageUser;