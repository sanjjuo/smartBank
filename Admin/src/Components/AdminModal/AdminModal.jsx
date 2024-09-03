import React, { useState } from 'react'
import "../AdminModal/AdminModal.css"
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminModal = (props) => {

    const { setLogin, url, token, setToken, ...modalProps } = props
    const navigate = useNavigate()
    const [modals, setModals] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (modals === "Login") {
            newUrl += "/api/adminAuth/login";
        } else {
            newUrl += "/api/adminAuth/register";
        }
    
        try {
            const response = await axios.post(newUrl, { name, email, password });
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setLogin(false);
                navigate("/home");
            } else {
                alert(response.data.message || "An error occurred during login.");
                console.error("There was an error logging in:", response.data.message || "No error message provided by server.");
            }
        } catch (err) {
            console.error("There was an error with the request:", err.message || err);
            alert("An error occurred. Please try again.");
        }
    }
    
    return (
        <div>
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
        </div>
    )
}

export default AdminModal
