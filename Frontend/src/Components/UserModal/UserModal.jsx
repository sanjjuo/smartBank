import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../UserModal/UserModal.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserModal(props) {

    const [modals, setModals] = useState("Login")
    return (
        <Modal
            {...props}

            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{
                    color: "#fff",
                    fontWeight: 700
                }}>
                    {modals}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="login-form">
                {modals === "Login" ? <></> : <input type="text" id="username" placeholder="Enter your Full Name" required />}
                    <input type="text" id="username" placeholder="Enter your username or email" required />
                    <input type="password" id="password" placeholder="Enter your password" required />
                    <div className="button-container">
                        {modals === "Login" ? <button type="submit">Login</button> : <button type="submit">Create account</button>}
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                {
                    modals === "Login" ? <p>Don't have an account? <Link onClick={()=>setModals("Sign up")}>Sign here</Link></p> : 
                    <p>Already have an account? <Link onClick={()=>setModals("Login")}>Login here</Link></p>
                }
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal
