import Modal from 'react-bootstrap/Modal';
import "../UserModal/UserModal.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

function UserModal(props) {

    const { setModal, url, token, setToken, ...modalProps } = props
    const navigate = useNavigate()

    const [modals, setModals] = useState("Login");
    const [name, setName] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleAccountNoChange = (e) => setAccountNo(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (modals === "Login") {
            newUrl += "/api/auth/login";
        } else {
            newUrl += "/api/auth/register";
        }
    
        try {   
            const response = await axios.post(newUrl, { name, accountNumber: accountNo, email, password });
            if (response.data.success) {
                if (modals === "Sign up") {
                    setModals("Login");
                } else {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                    setModal(false);
                    navigate("/home");
                }
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
            alert("An error occurred. Please try again.");
        }
    }
    

    return (
        <Modal
            {...modalProps}
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
                <form onSubmit={onLogin} className="login-form">
                    {modals === "Login" ? null : (
                        <>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your Full Name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                            <input
                                type="number"
                                id="accountNumber"
                                placeholder="Enter your Account number"
                                value={accountNo}
                                onChange={handleAccountNoChange}
                                required
                            />
                        </>
                    )}

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />

                    <div className="button-container">
                        <button type="submit">{modals === "Sign up" ? "Create Account" : "Login"}</button>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                {modals === "Login" ? (
                    <p>Don't have an account? <Link onClick={() => setModals("Sign up")}>Sign up here</Link></p>
                ) : (
                    <p>Already have an account? <Link onClick={() => setModals("Login")}>Login here</Link></p>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;
