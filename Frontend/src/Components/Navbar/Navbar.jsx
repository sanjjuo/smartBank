import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom"
import "../Navbar/Navbar.css"
import UserModal from '../UserModal/UserModal';
import { HiUserCircle } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import { SlLogout } from 'react-icons/sl';

const MyNavbar = ({ url, token, setToken }) => {

    const [modal, setModal] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()

    const isLoginPage = location.pathname === "/";
    const isBannerPage = location.pathname === "/home";
    const isTransactionPage = location.pathname === "/payment";

    const logOut = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }


    return (
        <div>
            <Navbar expand="lg" className={`navbar ${isBannerPage || isLoginPage ? "navbar-banner" : "navbar-other"}`}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ fontWeight: 800, color: "#ffbd39" }}>smartbank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            {isBannerPage && (
                                <>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#Products">Products</Nav.Link>
                                    <Nav.Link href="#About">About-us</Nav.Link>
                                    <Nav.Link href="#About">Blog</Nav.Link>
                                    <Nav.Link href="#Business">Business</Nav.Link>
                                </>
                            )}
                        </Nav>
                        {isLoginPage ?
                            <Nav className='ms-auto navbar-nav2'>
                                <Nav.Link onClick={() => setModal(true)}>Login</Nav.Link>
                            </Nav> :
                            <Nav className='ms-auto custom-profile'>
                                <Nav.Link ><HiUserCircle size={30} /></Nav.Link>
                                <ul className='nav-dropdown'>
                                    <li><IoSettings size={18} />Settings</li>
                                    <li onClick={logOut}><SlLogout size={18} />Logout</li>
                                </ul>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <UserModal show={modal} onHide={() => setModal(false)} setModal={setModal} url={url} token={token} setToken={setToken} />
        </div>
    )
}

export default MyNavbar
