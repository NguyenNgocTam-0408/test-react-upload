import { upload } from '@testing-library/user-event/dist/upload';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoAddCircle } from "react-icons/io5";

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

     const handleuploadImage = (event) => {
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} >
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} size='xl' backdrop="static"
            className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
            
                        <div className="col-md-6">
                            <label className="form-label">User name</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(e) => setRole(e.target.value)}>
                                <option selected value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-image">Image</label>
                            
                        </div>
                        <div className="col-md-12 imageriview">
                           <div className="preview-image-user" >
                                    {previewImage ?
                                        <img src={previewImage} className='item-image' />
                                        :<span><IoAddCircle htmlFor="upload-image" className='item1' />
                                        <label htmlFor="upload-image" className='item1' >Tải ảnh lên.</label></span>
                                    }

                                    <input type='file' id='upload-image' hidden onChange={(event) => handleuploadImage(event)} />
                                    

                                    </div>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;